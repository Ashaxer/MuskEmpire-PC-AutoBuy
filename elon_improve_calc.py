import time
from datetime import datetime

e2 = {"key": "notcoin",
     "title": "{Probably Nothing}",
     "category": "personal",
     "subCategory": "special",
     "priceBasic": 100000,
     "priceFormula": "fnCompound",
     "priceFormulaK": 90,
     "profitBasic": 15,
     "profitFormula": "fnPayback",
     "profitFormulaK": 5,
     "maxLevel": 10,
     "timeBasic": "0",
     "timeFormula": "fnCompound",
     "timeFormulaK": "10",
     "desc": "Special card: exclusively for {Notcoiners}. Tier {Gold} and {Platinum}",
     "special": "notcoin_tier_gold",
     "levels": []
     }
e={
  "key": "lighting",
  "title": "Lighting",
  "category": "office",
  "subCategory": "space",
  "priceBasic": 12000,
  "priceFormula": "fnCompound",
  "priceFormulaK": 51,
  "profitBasic": 10,
  "profitFormula": "fnPayback",
  "profitFormulaK": 1,
  "maxLevel": 30,
  "timeBasic": "10",
  "timeFormula": "fnCompound",
  "timeFormulaK": "40",
  "desc": "Let there be light, like in a startup founder's heart.",
  "special": "",
  "levels": [
    {
      "level": 1,
      "title": "",
      "requiredSkills": {
        "area": 2
      },
      "requiredHeroLevel": 0,
      "requiredFriends": 0,
      "desc": ""
    },
    {
      "level": 3,
      "title": "",
      "requiredSkills": {
        "area": 5
      },
      "requiredHeroLevel": 0,
      "requiredFriends": 0,
      "desc": ""
    },
    {
      "level": 5,
      "title": "",
      "requiredSkills": {
        "area": 10
      },
      "requiredHeroLevel": 0,
      "requiredFriends": 3,
      "desc": ""
    },
    {
      "level": 10,
      "title": "",
      "requiredSkills": {
        "area": 15
      },
      "requiredHeroLevel": 0,
      "requiredFriends": 4,
      "desc": ""
    },
    {
      "level": 20,
      "title": "",
      "requiredSkills": {
        "area": 15
      },
      "requiredHeroLevel": 19,
      "requiredFriends": 4,
      "desc": ""
    },
    {
      "level": 28,
      "title": "",
      "requiredSkills": {
        "area": 30
      },
      "requiredHeroLevel": 21,
      "requiredFriends": 5,
      "desc": ""
    },
    {
      "level": 29,
      "title": "",
      "requiredSkills": {
        "area": 30
      },
      "requiredHeroLevel": 21,
      "requiredFriends": 5,
      "desc": ""
    },
    {
      "level": 30,
      "title": "",
      "requiredSkills": {
        "area": 35
      },
      "requiredHeroLevel": 21,
      "requiredFriends": 7,
      "desc": ""
    }
  ]
}

s = {
  "level": 13,
  "lastUpgradeDate": "2024-07-24 11:13:03",
  "finishUpgradeDate": "2024-07-24 11:22:13"
}
s2 = {
    "level": 10,
    "lastUpgradeDate": "2024-07-22 14:30:03",
    "finishUpgradeDate": None
}
r = t = s["level"] + 1


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





def calculate_best_purchase(all_data, sync_data, dbs_data, improve_data, sync_time, improve_time):
    hero_friends = all_data["data"]["profile"]["friends"]
    try:
        if improve_time > sync_time:
            hero_level = improve_data["data"]["hero"]["level"]
        else:
            hero_level = sync_data["data"]["hero"]["level"]
        my_skill_data = improve_data["data"]["skill"]
    except:
        my_skill_data = all_data["data"]["skills"]
        hero_level = all_data["data"]["hero"]["level"]
    for my_skill, my_limit in my_skill_data.items():
        if type(my_limit["finishUpgradeDate"]) is str:
            my_skill_data[my_skill]["finishUpgradeDate"] = datetime.strptime(my_limit["finishUpgradeDate"], "%Y-%m-%d %H:%M:%S").timestamp()
    money = all_data["data"]["hero"]["money"]
    skills = dbs_data["data"]["dbSkills"]
    qualified_skills = []
    for skill in skills:
        qualified = False
        try:
            my_skill = my_skill_data[skill["key"]]
            skill_price = get_price(skill,my_skill["level"]+1)
            skill_profit = get_profit(skill,my_skill["level"]+1)
            if skill["maxLevel"] <= my_skill["level"]: continue
            if (0 if my_skill["finishUpgradeDate"] is None else my_skill["finishUpgradeDate"]) < time.time() and money > skill_price:
                if len(skill["levels"]) == 0: qualified = True
                else:
                    matched_skill_limit = None
                    for skill_limit in skill["levels"]:
                        if my_skill["level"] == skill_limit["level"]-1:
                            matched_skill_limit = skill_limit
                            break
                    if matched_skill_limit is None: qualified = True
                    elif matched_skill_limit["requiredHeroLevel"] <= hero_level and matched_skill_limit["requiredFriends"] <= hero_friends:
                                if len(matched_skill_limit["requiredSkills"]) == 0: qualified = True
                                else:
                                    for req_skill, req_level in matched_skill_limit["requiredSkills"].items():
                                        if my_skill_data[req_skill]["level"] >= req_level: qualified = True
        except:
            skill_price = get_price(skill,1)
            skill_profit = get_profit(skill,1)
            if money > skill_price and len(skill["levels"]) == 0: qualified = True
            else:
                for skill_limit in skill["levels"]:
                    if skill_limit["requiredHeroLevel"] <= hero_level and skill_limit["requiredFriends"] <= hero_friends:
                        if len(skill_limit["requiredSkills"]) == 0: qualified = True
                        else:
                            for req_skill, req_level in skill_limit["requiredSkills"].items():
                                if my_skill_data[req_skill]["level"] >= req_level: qualified = True
        if qualified:
            skill["ratio"] = skill_profit / skill_price
            skill["price"] = skill_price
            skill["profit"] = skill_profit
            skill["newlevel"] = my_skill_data[skill["key"]]["level"] + 1
            qualified_skills.append(skill)
    best_skill = sorted(qualified_skills, key=lambda x: x["ratio"])[-1]
    if len(best_skill) > 0: return True, best_skill
    else: return False, None


if __name__ == "__main__":
    print("price:",get_price(e,t))
    print("profit:",get_profit(e,t)-get_profit(e,t-1))