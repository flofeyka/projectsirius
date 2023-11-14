import http.server
import socketserver

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/on':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            self.wfile.write('<h1>on</h1>'.encode('utf-8'))
        elif self.path == '/off':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            self.wfile.write('<h1>off</h1>'.encode('utf-8'))
        elif self.path[:-3] == '/power':
            
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            self.wfile.write('<h1>a="https://youtu.be/dQw4w9WgXcQ?si=5Ap3pNZI1QI81KaL"</h1>'.encode('utf-8'))
        else:
            super().do_GET()

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("Сервер запущен на порту", PORT)
    httpd.serve_forever()
