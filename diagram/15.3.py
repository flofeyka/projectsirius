import http.server
import socketserver
import json

PORT = 8088

pump_power = 0
pump_status = False

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        pump_data = {
            "status": "On" if pump_status else "Off",
            "power": pump_power
        }

        json_data = json.dumps(pump_data)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        self.wfile.write(json_data.encode())

def handle_input():
    global pump_power, pump_status
    while True:
        status_input = int(input("Введите статус насоса (0 - выключен, 1 - включен): "))
        power_input = int(input("Введите мощность насоса: "))
        
        match status_input:
            case 0:
                pump_status = False
            case 1:
                pump_status = True
            case _:
                print("Некорректный ввод для статуса насоса. Повторите попытку.")
                continue


        try:
            pump_power = float(power_input)
            break
        except ValueError:
            print("Некорректный ввод для мощности насоса. Повторите попытку.")

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Сервер работает на порту {PORT}")
    handle_input()  
    httpd.serve_forever()
