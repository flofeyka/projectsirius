import cv2
import numpy as np
import time

# Функция для сравнения двух изображений
def compare_images(image1, image2):
    difference = cv2.subtract(image1, image2)
    result = not np.any(difference)
    return result

# Захватываем изображение с камеры каждые 0,5 секунды
cap = cv2.VideoCapture(0)
previous_frame1 = None
previous_frame2 = None

while True:
    ret, frame = cap.read()

    if ret:
        # Сохраняем текущее изображение в файл
        cv2.imwrite('current_image.jpg', frame)

        # Сравниваем текущее изображение с предыдущими
        if previous_frame1 is not None and previous_frame2 is not None:
            current_image = cv2.imread('current_image.jpg')
            previous_image1 = cv2.imread('previous_image1.jpg')
            previous_image2 = cv2.imread('previous_image2.jpg')

            if compare_images(current_image, previous_image1) and compare_images(current_image, previous_image2):
                print("Изображение не изменилось")
            else:
                print("Изображение изменилось")

        # Обновляем предыдущие изображения
        previous_frame2 = previous_frame1
        previous_frame1 = frame.copy()

        # Переименовываем текущее изображение в предыдущее
        cv2.imwrite('previous_image2.jpg', cv2.imread('previous_image1.jpg'))
        cv2.imwrite('previous_image1.jpg', cv2.imread('current_image.jpg'))

    # Ждем 0,5 секунды перед следующим захватом изображения
    time.sleep(0.5)

# Освобождаем ресурсы
cap.release()