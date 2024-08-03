# get_mac_address.py

import os
import json
import sys

def get_mac_address():
    result = os.popen('getmac').read().strip().split('\n')
    mac_address = result[0].split()[0]
    return mac_address

def send_message(message):
    message_json = json.dumps(message)
    sys.stdout.write(message_json)
    sys.stdout.flush()

if __name__ == "__main__":
    mac_address = get_mac_address()
    send_message({"macAddress": mac_address})
