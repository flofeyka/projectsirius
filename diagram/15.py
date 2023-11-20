from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json

class DeviceStatusHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(bytes(self._generate_form(), 'utf-8'))

        # Extract the query parameters from the URL
        query_params = parse_qs(self.path[2:])
        is_device_on = bool(int(query_params['is_device_on'][0] if 'is_device_on' in query_params else '0'))

        if is_device_on:
            pollution_level = int(query_params['pollution_level'][0] if 'pollution_level' in query_params else '0')

            if 0 <= pollution_level <= 100:
                if pollution_level <= 20:
                    status = "The device is switched on and slightly dirty."
                elif pollution_level <= 50:
                    status = "The device is switched on and is moderately dirty."
                else:
                    status = "The device is switched on and is very dirty."
            else:
                status = "Incorrect pollution level entered."
        else:
            status = "Device is turned off."

        if 'report' in self.path:
            response = {'status': status}
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(bytes(json.dumps(response), 'utf-8'))
        else:
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(bytes(status, 'utf-8'))

    def _generate_form(self):
        return '''
        <form method="GET">
            <label for="is_device_on">Device status (1 - Enabled, 0 - Disabled):</label>
            <input type="text" id="is_device_on" name="is_device_on">
            <br>
            <label for="pollution_level">Pollution level (from 1 to 100):</label>
            <input type="text" id="pollution_level" name="pollution_level">
            <br>
            <input type="submit" value="Check">
        </form>
        '''

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, DeviceStatusHandler)
    print('Сервер запущен на порту 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
