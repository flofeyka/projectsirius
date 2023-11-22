import cv2
import time
import requests
import numpy as np

frame_list = []

while True:
    cap = cv2.VideoCapture(1)
    ret, frame = cap.read()
    cap.release()

    # Сохраняем текущий кадр
    cv2.imwrite('current_frame.jpg', frame)

    # Добавляем текущий кадр в список
    frame_list.append(frame)

    # Если в списке уже есть 3 кадра, удаляем самый старый
    if len(frame_list) > 3:
        frame_list.pop(0)

    # Сравниваем текущий кадр с предыдущими двумя
    diff_count = 0
    for i in range(len(frame_list) - 1):
        similarity = cv2.matchTemplate(frame_list[i], frame_list[i+1], cv2.TM_CCOEFF_NORMED)
        if np.max(similarity) < 0.65:  # Пороговое значение для определения несовпадения
            diff_count += 1

    # Если текущий кадр не совпадает на 65 процентов с предыдущими двумя, отправляем "FALSE" на сервер
    if diff_count > 0:
        response = requests.get("http://localhost:5000/cam")
        print(response.text)

    time.sleep(1)
