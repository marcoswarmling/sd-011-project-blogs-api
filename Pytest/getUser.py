import json
import sys
import traceback

import requests

baseURL = "http://localhost:3000"
loginURl = f"{baseURL}/login"
headers = {
    "Accept": "*/*",
    "User-Agent": "request",
}


def getToken(email, password):
    body = {"email": email, "password": password}
    response = requests.post(url=loginURl, json=body, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return False


userToken = getToken("lewishamilton@gmail.com", "123456")


headers = {"Accept": "*/*", "User-Agent": "request", "Authorization": userToken["token"]}
testUser = {
    "displayName": "Lewis Hamilton",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
    "email": "lewishamilton@gmail.com",
}


def getAllUsers():
    try:
        response = requests.get(url=f"{baseURL}/user", headers=headers).text
        response = json.loads(response)[0]
        assert response["email"] == testUser["email"]
        assert response["displayName"] == testUser["displayName"]
        assert response["image"] == testUser["image"]

    except AssertionError:
        _, _, tb = sys.exc_info()
        traceback.print_tb(tb)  # Fixed format
        tb_info = traceback.extract_tb(tb)
        filename, line, func, text = tb_info[-1]

        print("An error occurred on line {} in statement {}".format(line, text))
        exit(1)


getAllUsers()
