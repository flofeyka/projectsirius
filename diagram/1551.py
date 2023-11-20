import http.server
import socketserver
import json
from urllib.parse import urlparse, parse_qs

PORT = 8089
pump_power = 0
pump_status = False

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        url_parts = urlparse(self.path)
        query_params = parse_qs(url_parts.query)
        
        if "status" in query_params:
            status_input = query_params["status"][0]
            if status_input == "0":
                pump_status = False
            elif status_input == "1":
                pump_status = True
            else:
                self.send_error(400, "Invalid input for pump status.")
                return
        
        if "power" in query_params:
            try:
                pump_power = float(query_params["power"][0])
            except ValueError:
                self.send_error(400, "Invalid input for pump power.")
                return
        
        pump_data = {"status": "On" if pump_status else "Off"}
        if pump_status:
            pump_data["power"] = pump_power
        
        json_data = json.dumps(pump_data)
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        self.wfile.write(json_data.encode())

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Сервер работает на порту {PORT}")
    httpd.serve_forever()
