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


def getAllUsers():
    try:
        body = {"name": "NewCategory"}
        response = requests.post(url=f"{baseURL}/category", headers=headers, json=body).text
        response = json.loads(response)
        print(response)
        print("Body response:")

        for i in response:
            print(f"{i}: {response[i]}")
        print("\n")

        assert response["name"] == body["name"]

        print("All tests passed!")

    except AssertionError:
        _, _, tb = sys.exc_info()
        traceback.print_tb(tb)  # Fixed format
        tb_info = traceback.extract_tb(tb)
        filename, line, func, text = tb_info[-1]

        print("An error occurred on line {} in statement {}".format(line, text))
        exit(1)


getAllUsers()
