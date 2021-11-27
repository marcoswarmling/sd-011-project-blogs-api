import json

import requests

URL = "http://localhost:3000/user"
headers = {
    "Accept": "*/*",
    "User-Agent": "request",
}

resposta = requests.get(URL, headers=headers).text
resposta = json.loads(resposta)[0]
for i in resposta:
    print(i, ":", resposta[i])
