import requests
import cv2
import numpy as np

# Функция для сравнения изображений
def compare_images(img1, img2):
    difference = cv2.subtract(img1, img2)
    result = not np.any(difference)
    return result

# Функция для отправки уровня тревоги на локальный сервер
def send_alert_level(level):
    url = "http://localhost:8000/alert"
    payload = {"level": level}
    requests.post(url, data=payload)

# Запуск программы
def run_program():
    # Установка параметров сервера и индикатора тревоги
    server_ip = "localhost"
    server_port = 8000
    alarm_levels = {"1": 1, "2": 2, "3": 3}
    previous_frames = []

    # Бесконечный цикл для захвата изображений
    while True:
        # Захват изображения
        cap = cv2.VideoCapture(0)
        ret, frame = cap.read()
        cap.release()

        # Сравнение с предыдущими кадрами
        match_count = 0
        for prev_frame in previous_frames:
            if compare_images(frame, prev_frame):
                match_count += 1

        # Определение уровня тревоги
        if match_count == 1:
            alert_level = alarm_levels["1"]
        elif match_count == 2:
            alert_level = alarm_levels["2"]
        elif match_count >= 3:
            alert_level = alarm_levels["3"]
        else:
            alert_level = 0

        # Отправка уровня тревоги на сервер
        send_alert_level(alert_level)

        # Обновление списка предыдущих кадров
        previous_frames.append(frame)
        if len(previous_frames) > 3:
            previous_frames.pop(0)

        # Задержка в 1 секунду
        cv2.waitKey(1000)

# Запуск программы
run_program()