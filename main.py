import random

import threading

from requests import post
from time import sleep, time

import elon_improve_calc as calc


class DataUpdater:
    def __init__(self, headers):
        self.headers = headers
        self.first_run = True
        self.data = None
        self.lock = threading.Lock()
        self.stop_event = threading.Event()
        self.thread = threading.Thread(target=self.update_data)
        self.thread.start()

    def update_data(self):
        while not self.stop_event.is_set():
            if self.first_run:
                self.first_run = False
                new_data = self.first_fetch()
                with self.lock:
                    self.data = new_data
            else:
                # Simulate fetching data from a function
                new_data = self.fetch_data()

                # Update the shared variable in a thread-safe manner
                with self.lock:
                    self.data = new_data

            sleep(30)

    def first_fetch(self):
        url = "https://api.muskempire.io/hero/bonus/offline/claim"
        json = {}
        try:
            response = post(url=url, headers=self.headers, json=json)
            if response.json()["success"]: print("-=Synced=-")
            return response.json()
        except Exception as e:
            print(f"-=Sync Error: {e}=-")

    def fetch_data(self):
        url = "https://api.muskempire.io/hero/balance/sync"
        json = {}
        try:
            response = post(url, headers=self.headers, json=json)
            if response.json()["success"]: print("-=Synced=-")
            return response.json()
        except Exception as e:
            print(f"-=Sync Error: {e}=-")


    def get_data(self):
        # Access the shared variable in a thread-safe manner
        with self.lock:
            return self.data

    def stop(self):
        self.stop_event.set()
        self.thread.join()




def auth(auth):
    headers = {
        "Content-Type": "application/json",
        "Api-Key": auth,
        "Origin": "https://api.muskempire.io",
        "Referer": "https://api.muskempire.io/"
    }
    return headers

def dbs(headers):
    url = "https://api.muskempire.io/dbs"
    json = {"data": {"dbs": ["all"]}}
    response = post(url=url, headers=headers, json=json).json()
    print("get_dbs method:", response["success"])
    return response

def assets(headers):
    url = "https://api.muskempire.io/assets"
    json = {"data": {}}
    response = post(url=url, headers=headers, json=json).json()
    print("get_assets method:", response["success"])
    return response

def all(headers):
    url = "https://api.muskempire.io/user/data/all"
    json = {"data": {}}
    response = post(url=url, headers=headers, json=json).json()
    print("get_all method:",response["success"])
    return response


def purchase_upgrade(headers, item):
    url = "https://api.muskempire.io/skills/improve"
    json = {"data": item}
    response = post(url, headers=headers, json=json).json()
    print("[DEBUG]:",item,response["success"])
    return response



if __name__ == "__main__":
    headers = auth(input("Paste your auth Api-Key:\n"))
    data_updater = DataUpdater(headers)
    sleep(3)
    dbs_data = dbs(headers)
    assets_data = assets(headers)
    all_data = all(headers) #also get when improve
    improve_data = None
    sync_time = 0
    improve_time = 0
    #
    # with open("all_data.json", "r", encoding="utf-8") as f: all_data = json.loads(f.read()); f.close()
    # with open("assets_data.json", "r", encoding="utf-8") as f: assets_data = json.loads(f.read()); f.close()
    # with open("dbs_data.json", "r", encoding="utf-8") as f: dbs_data = json.loads(f.read()); f.close()
    # with open("sync_data.json", "r", encoding="utf-8") as f: sync_data = json.loads(f.read()); f.close()
    #

    while True:
        print("=======================")
        try:
            new_sync_data = data_updater.get_data()
            type(new_sync_data["data"]["hero"]["level"])
            sync_data = new_sync_data
            sync_time = time()
        except:
            pass
        try:
            best_item = calc.calculate_best_purchase(all_data, sync_data, dbs_data, improve_data, sync_time, improve_time)
            if best_item[0]:
                improve_data = purchase_upgrade(headers, best_item[1]["key"])
                print("*-*-*-*-*-*-*-*-*")
                print(f"Purchased: {best_item[1]['title']} from {best_item[1]['category']}")
                print(f"New Level: {best_item[1]['newlevel']}")
                print(f"Price: {best_item[1]['price']//100000/10}M")
                print(f"Profit: {best_item[1]['profit']//100/10}K/H")
                print(f"Ratio: {round(best_item[1]['ratio'],4)}")
                print("*-*-*-*-*-*-*-*-*")
                improve_time = time()
        except:
            pass
        if improve_data is not None and improve_time > sync_time:
            try:
                print("Money:", improve_data["data"]["hero"]["money"]//100000/10,"M")
                print("Profit/H:", improve_data["data"]["hero"]["moneyPerHour"]//100000/10,"M")
            except:
                print("Money:", sync_data["data"]["hero"]["money"]//100000/10,"M")
                print("Profit/H:", sync_data["data"]["hero"]["moneyPerHour"]//100000/10,"M")
        else:
            print("Money:", sync_data["data"]["hero"]["money"]//100000/10,"M")
            print("Profit/H:", sync_data["data"]["hero"]["moneyPerHour"]//100000/10,"M")
        wait = random.randint(4,12)
        print("Waiting",wait,"secs")
        sleep(wait)
        print("Checking again...")