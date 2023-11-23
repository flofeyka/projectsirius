import http.server
import socketserver

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/start':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<img src="nas_gif.gif" alt="Image">')
        elif self.path == '/end':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<img src="nas_1.jpg" alt="Image">')
        else:
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<img src="nas_1.jpg" alt="Image">')

with socketserver.TCPServer(("", 8000), MyHandler) as httpd:
    print("Сервер запущен на порту 8000...")
    httpd.serve_forever()