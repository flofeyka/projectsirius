import requests
import json

url = "https://example.com/api" # надо заменить на адрес куда запрос

data = {
    "key1": "value1",
    "key2": "value2"
}

response = requests.post(url, json=data)

if response.status_code == 200:
    if response.text:
        response_data = json.loads(response.text)

        print(response_data)
    else:
        print("Ответ не содержит данных")
else:
    print("Ошибка при выполнении запроса:", response.status_code)
