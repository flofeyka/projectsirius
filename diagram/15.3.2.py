from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs, urlparse
import json

class SecurityStatusHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        query = parse_qs(parsed_path.query)
        if 'sys_mode' in query:
            mode = query['sys_mode'][0]
            mode_map = {'night': '1', 'daytime': '2', 'hypersensitivity': '3'}
            if mode in mode_map:
                object_status, resource_status = self._process_mode(mode_map[mode])
                response = {'object_status': object_status, 'resource_status': resource_status}
                self.send_response(200)
                if 'report' in query:
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(bytes(json.dumps(response), 'utf-8'))
                else:
                    self.send_header('Content-type', 'text/html')
                    self.end_headers()
                    self.wfile.write(bytes(object_status + '<br>' + resource_status, 'utf-8'))
            else:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b'Invalid sys_mode parameter')
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'Missing sys_mode parameter')

    def _process_mode(self, mode):
        if mode == '1':
            return "The object is in night mode", "Security system resource: minimal"
        elif mode == '2':
            return "The object is in daytime mode", "Security system resource: optimal"
        elif mode == '3':
            return "The object is in high sensitivity mode", "Security system resource: high"
        else:
            return "The object is in default mode", "Security system resource: medium"

def run_server():
    server_address = ('', 8089)
    httpd = HTTPServer(server_address, SecurityStatusHandler)
    print('Сервер запущен на порту 8089...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
