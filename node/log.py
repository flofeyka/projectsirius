import json
import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs


allowed_ips = ['10.10.201.58', '188.170.214.37']

# Функция для создания лога обращения к камере
def create_camera_log(camera_id, is_object_detected):
    # Получаем текущую дату и время
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Создаем словарь с данными лога
    log_entry = {
        "camera_id": camera_id,
        "timestamp": current_time,
        "is_object_detected": is_object_detected
    }

    return log_entry

# Класс обработчика HTTP-запросов
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        query_params = parse_qs(parsed_path.query)

        def do_GET(self):
            client_ip = self.client_address[0]
            if client_ip not in allowed_ips:
                self.send_response(403)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Доступ запрещен'}).encode())
                return

        if 'camera_id' in query_params and 'is_object_detected' in query_params:
            camera_id = query_params['camera_id'][0]
            is_object_detected = query_params['is_object_detected'][0]

            log_entry = create_camera_log(camera_id, is_object_detected)
            log_json = json.dumps(log_entry)

            # Записываем лог в файл
            with open("camera_logs.json", "a") as log_file:
                log_file.write(log_json + "\n")

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'message': 'Лог успешно сохранен'}).encode())
        else:
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Неверные параметры запроса'}).encode())

# Запуск HTTP-сервера
def run_server():
    server_address = ('10.10.201.58', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Сервер запущен на порту 8000...')
    httpd.serve_forever()

run_server()