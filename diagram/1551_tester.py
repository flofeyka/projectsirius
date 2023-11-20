import http.client
import json

def get_data_from_local_server():
    conn = http.client.HTTPConnection("localhost", 8089)  
    
    conn.request('GET', '/?status=0&power=56')
    
    response = conn.getresponse()
    
    data = response.read().decode()
    
    conn.close()
    
    json_data = json.loads(data)

    print(json_data)

get_data_from_local_server()

