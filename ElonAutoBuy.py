import hashlib
import json
import random

import humanize
import pytz
import threading
import time
import urllib.parse
from datetime import datetime
from requests import post

api_url = "https://api.xempire.io"
base_url = "https://game.xempire.io"

class User:
    def __init__(self, payload_data):
        self.hero_name = None
        self.exp = None
        self.levelup_progress = None
        self.hero_level = None
        self.hero_title = None
        self.friends = None
        self.money = None
        self.moneyPH = None
        self.hero_skills = None
        self.dbs_data = None
        self.assets_data = None
        self.all_data = None
        self.improve_data = None
        self.sync_data = None
        self.first_run = True
        self.payload_data = payload_data
        self.apikey = get_key_from_payload(payload_data)


        self.lock = threading.Lock()
        self.stop_event = threading.Event()
        self.thread = threading.Thread(target=self.Sync)
        self.thread.start()

    def reqDbs(self):
        try:
            payload = {"data": {"dbs": ["all"]}}
            payload = json.dumps(payload,separators=(",",":"))
            headers = HeaderGen(payload, self.apikey)
            url = f"{api_url}/dbs"
            response = post(url=url, headers=headers, data=payload).json()
            print("get_dbs method:", response["success"])
            self.dbs_data = response
            return self.dbs_data
        except Exception as e:
            print("Error at reqDbs:\n", e)
            return False

    def reqAssets(self):
        try:
            payload = {"data": {}}
            payload = json.dumps(payload,separators=(",",":"))
            headers = HeaderGen(payload, self.apikey)
            url = f"{api_url}/assets"
            response = post(url=url, headers=headers, data=payload).json()
            print("get_assets method:", response["success"])
            self.assets_data = response
            return self.assets_data
        except Exception as e:
            print("Error at reqAssets:\n", e)
            return False

    def reqAll(self):
        try:
            payload = {"data": {}}
            payload = json.dumps(payload,separators=(",",":"))
            headers = HeaderGen(payload, self.apikey)
            url = f"{api_url}/user/data/all"
            response = post(url=url, headers=headers, data=payload).json()
            print("get_all method:",response["success"])
            self.all_data = response
            self.hero_name = response["data"]["profile"]["userName"]
            self.friends = response["data"]["profile"]["friends"]
            self.exp = response["data"]["hero"]["exp"]
            self.hero_level = response["data"]["hero"]["level"]
            self.money = response["data"]["hero"]["money"]
            self.moneyPH = response["data"]["hero"]["moneyPerHour"]
            self.hero_skills = response["data"]["skills"]
            self._calculate_levelupProgress()
            return self.all_data
        except Exception as e:
            print("Error at reqAll:\n", e)
            return False

    def reqImprove(self, item):
        try:
            payload = {"data": item}
            payload = json.dumps(payload,separators=(",",":"))
            headers = HeaderGen(payload, self.apikey)
            url = f"{api_url}/skills/improve"
            response = post(url, headers=headers, data=payload).json()
            if not response["success"]:
                print("[DEBUG]:", item, response["error"])
            else:
                self.improve_data = response
                self.hero_level = response["data"]["hero"]["level"]
                self.money = response["data"]["hero"]["money"]
                self.exp = response["data"]["hero"]["exp"]
                self.moneyPH = response["data"]["hero"]["moneyPerHour"]
                self.hero_skills = response["data"]["skill"]
                self._calculate_levelupProgress()
                return self.improve_data
        except Exception as e:
            print("Error at reqImprove:\n", e)
            return False

    def Sync(self):
        while not self.stop_event.is_set():
            if self.first_run:
                time.sleep(10)
                self.first_run = False
                new_data = self.reqClaim()
                with self.lock:
                    self.sync_data = new_data
            else:
                new_data = self.reqSync()
                with self.lock:
                    self.sync_data = new_data
            time.sleep(60)
    def reqClaim(self):
        payload = {}
        payload = json.dumps(payload,separators=(",",":"))
        headers = HeaderGen(payload, self.apikey)
        url = f"{api_url}/hero/bonus/offline/claim"
        try:
            response = post(url=url, headers=headers, data=payload).json()
            if response["success"]:
                print("--=== Synced ===--")
                self.hero_level = response["data"]["hero"]["level"]
                self.money = response["data"]["hero"]["money"]
                self.exp = response["data"]["hero"]["exp"]
                self.moneyPH = response["data"]["hero"]["moneyPerHour"]
                self._calculate_levelupProgress()
                return response
            else:
                print(f"--=== Sync Error: {response['error']} ===--")
        except Exception as e:
            print(f"--=== Sync Error: {e} ===--")

    def reqSync(self):
        payload = {}
        payload = json.dumps(payload,separators=(",",":"))
        headers = HeaderGen(payload, self.apikey)
        url = f"{api_url}/hero/balance/sync"
        try:
            response = post(url, headers=headers, data=payload).json()
            if response["success"]:
                print("--=== Synced ===--")
                self.hero_level = response["data"]["hero"]["level"]
                self.money = response["data"]["hero"]["money"]
                self.exp = response["data"]["hero"]["exp"]
                self.moneyPH = response["data"]["hero"]["moneyPerHour"]
                self._calculate_levelupProgress()
                return response
            else:
                print(f"--=== Sync Error: {response['error']} ===--")
        except Exception as e:
            print(f"--=== Sync Error: {e} ===--")

    def _convert_datetime2timestamp(self):
        for my_skill, my_limit in self.hero_skills.items():
            if type(my_limit["finishUpgradeDate"]) is str:
                self.hero_skills[my_skill]["finishUpgradeDate"] = datetime.strptime(my_limit["finishUpgradeDate"], "%Y-%m-%d %H:%M:%S").replace(tzinfo=pytz.utc).timestamp()

    def _calculate_levelupProgress(self):
        self.levelup_progress = (self.exp - self.dbs_data["data"]["dbLevels"][self.hero_level-1]["exp"]) / (self.dbs_data["data"]["dbLevels"][self.hero_level]["exp"] - self.dbs_data["data"]["dbLevels"][self.hero_level-1]["exp"])
        self.hero_title = self.dbs_data["data"]["dbLevels"][self.hero_level]["title"]

    def Calculate(self):
        skills = self.dbs_data["data"]["dbSkills"]
        self._convert_datetime2timestamp()
        qualified_skills = []
        for skill in skills:
            qualified = False
            if skill["key"] == "critical_thinking":
                pass
            try:
                my_skill = self.hero_skills[skill["key"]]
                skill_price = get_price(skill, my_skill["level"] + 1)
                skill_profit = get_profit(skill, my_skill["level"] + 1) - get_profit(skill, my_skill["level"])
                if skill["maxLevel"] <= my_skill["level"]: continue
                if (0 if my_skill["finishUpgradeDate"] is None else my_skill[
                    "finishUpgradeDate"]) < time.time() and self.money > skill_price:
                    if len(skill["levels"]) == 0:
                        qualified = True
                    else:
                        matched_skill_limit = None
                        for skill_limit in skill["levels"]:
                            if my_skill["level"] == skill_limit["level"] - 1:
                                matched_skill_limit = skill_limit
                                break
                        if matched_skill_limit is None:
                            qualified = True
                        elif matched_skill_limit["requiredHeroLevel"] <= self.hero_level and matched_skill_limit[
                            "requiredFriends"] <= self.friends:
                            if len(matched_skill_limit["requiredSkills"]) == 0:
                                qualified = True
                            else:
                                for req_skill, req_level in matched_skill_limit["requiredSkills"].items():
                                    try:
                                        if self.hero_skills[req_skill]["level"] >= req_level: qualified = True
                                    except:
                                        pass #skill is not owned
            except:
                skill_price = get_price(skill, 1)
                skill_profit = get_profit(skill, 1)
                my_skill = {"level": 0}
                if self.money > skill_price and len(skill["levels"]) == 0:
                    qualified = True
                else:
                    for skill_limit in skill["levels"]:
                        if (skill_limit["requiredHeroLevel"] <= self.hero_level and skill_limit["requiredFriends"] <=
                                self.friends):
                            if len(skill_limit["requiredSkills"]) == 0:
                                qualified = True
            if qualified:
                qualified_skill = {}
                qualified_skill["key"] = skill["key"]
                qualified_skill["title"] = skill["title"]
                qualified_skill["categ"] = skill["category"]
                qualified_skill["level"] = my_skill["level"]
                qualified_skill["ratio"] = skill_profit / skill_price
                qualified_skill["price"] = skill_price
                qualified_skill["profit"] = skill_profit
                qualified_skills.append(qualified_skill)
        best_skill = sorted(qualified_skills, key=lambda x: x["ratio"])[::-1]
        return best_skill


def HeaderGen(payload, api_key = None, api_time = None):
    if api_key is None:
        api_key = get_key_from_payload(payload)
    if api_time is None:
        api_time = int(time.time())
    headers = {
        "Content-Type": "application/json",
        "Api-Key": api_key,
        "Api-Hash": Hash_Generator(payload, api_time),
        "Api-Time": str(api_time),
        "Origin": base_url,
        "Referer": f"{base_url}/",
        "Accept": "*/*",
        "Is-Beta-Server": "null",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }
    return headers

def Hash_Generator(Payload, ApiTime = time.time()):
    o = bool(Payload)
    ApiTime = int(ApiTime)
    if isinstance(Payload, dict):
        Payload = json.dumps(Payload,separators=(",",":"))
    elif isinstance(Payload, str):
        Payload = json.dumps(json.loads(Payload),separators=(",",":"))
    return hashlib.md5(urllib.parse.quote(f"{ApiTime}_{Payload if o else ''}").encode()).hexdigest()


def get_key_from_payload(Payload):
    Payload = json.loads(Payload)
    initData = Payload["data"]["initData"].split("&")
    for data in initData:
        if "hash" in data:
            return data.strip("hash=")

def get_price(e, t):
    return calculate(e['priceFormula'], t, e['priceBasic'], e['priceFormulaK']) if t else 0


def get_profit(e, t):
    return calculate(e['profitFormula'], t, e['profitBasic'], e['profitFormulaK'], e) if t else 0


def calculate(e, t, s, c, r=None):
    i = s
    if e == "fnCompound":
        i = fn_compound(t, s, c)
    elif e == "fnLogarithmic":
        i = fn_logarithmic(t, s)
    elif e == "fnLinear":
        i = fn_linear(t, s)
    elif e == "fnQuadratic":
        i = fn_quadratic(t, s)
    elif e == "fnCubic":
        i = fn_cubic(t, s)
    elif e == "fnExponential":
        i = fn_exponential(t, s, c)
    elif e == "fnPayback":
        i = fn_payback(t, r)

    return smart_round(i)


def tr(s, c=100):
    return round(s / c) * c


def smart_round(e):
    if e < 50:
        return round(e)
    elif e < 100:
        return tr(e, 5)
    elif e < 500:
        return tr(e, 25)
    elif e < 1000:
        return tr(e, 50)
    elif e < 5000:
        return tr(e, 100)
    elif e < 10000:
        return tr(e, 200)
    elif e < 100000:
        return tr(e, 500)
    elif e < 500000:
        return tr(e, 1000)
    elif e < 1000000:
        return tr(e, 5000)
    elif e < 50000000:
        return tr(e, 10000)
    elif e < 100000000:
        return tr(e, 50000)
    else:
        return tr(e, 100000)

def numbify(n):
    num = humanize.intword(n, format="%.2f")
    replacements = {
        " thousand": "K",
        " million": "M",
        " billion": "B",
        " trillion": "T",
        " quadrillion": "Q",
        " quintillion": "Qi",
        " sextillion": "Sx",
        " septillion": "Sp",
        " octillion": "O",
        " nonillion": "N",
        " decillion": "D"
    }
    for word, abbreviation in replacements.items():
        num = num.replace(word, abbreviation)
    return num
def fn_linear(e, t):
    return t * e


def fn_quadratic(e, t):
    return t * e * e


def fn_cubic(e, t):
    return t * e * e * e


def fn_exponential(e, t, s):
    return t * (s / 10) ** e


def fn_logarithmic(e, t):
    import math
    return t * math.log2(e + 1)


def fn_compound(e, t, s):
    c = s / 100
    return t * (1 + c) ** (e - 1)


def fn_payback(e, t):
    s = [0]
    for c in range(1, e + 1):
        r = s[c - 1]
        i = get_price(t, c)
        S = t['profitBasic'] + t['profitFormulaK'] * (c - 1)
        L = smart_round(r + i / S)
        s.append(L)
    return s[e]


def get_int(text, min=0, max=1e20):
    n = ''
    while not isinstance(n, int):
        print(text)
        try:
            n = int(input())
            if min <= n <= max:
                return n
            else:
                print(f"Try Again in range ({min}...{max})", end="")
                n = str(n)
        except:
            print("Try again...", text)

if __name__ == "__main__":
    payload = input("Enter auth request payload in source view:\n")
    Hero = User(payload)
    time.sleep(1)
    Hero.reqDbs()
    Hero.reqAssets()
    Hero.reqAll()

    while True:
        best_items = Hero.Calculate()
        try:
            best_item = best_items[0]
            Hero.reqImprove(best_item["key"])
            print("--===≡≡≡≡≡≡ UPGRADED ≡≡≡≡≡≡===--")
            print(f"Purchased: {best_item['title']} from {best_item['categ']}")
            print(f"New Level: {best_item['level']+1}")
            print(f"Price: {numbify(best_item['price'])}")
            print(f"Profit: {numbify(best_item['profit'])}")
            print(f"Ratio: {round(best_item['ratio'],4)}")
            print()
        except:
            pass
        print("--===≡≡≡≡≡≡ STATUS ≡≡≡≡≡≡===--")
        print("Hero:",Hero.hero_name, f"({Hero.hero_title})")
        print("Level:",Hero.hero_level, f"({round(Hero.levelup_progress*100)}%)")
        print("Money:",numbify(Hero.money))
        print("Profit/H",numbify(Hero.moneyPH))
        print()
        if Hero.money < (Hero.moneyPH / 5):
            print("--=== Low Amount of Money Detected. Sleeping longer ===--")
            timer = random.randint(5400,14400)
        else:
            timer = random.randint(3,15)
        print(f"--=== Waiting {timer} Secs ===--")
        time.sleep(timer)
        print()
