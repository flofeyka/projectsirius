import cv2
import numpy as np
import time

def compare_images(img1, img2, img3):
    # Преобразование изображений в оттенки серого
    gray1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
    gray2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
    gray3 = cv2.cvtColor(img3, cv2.COLOR_BGR2GRAY)

    # Вычисление разницы между изображениями
    diff1 = cv2.absdiff(gray1, gray2)
    diff2 = cv2.absdiff(gray2, gray3)

    # Пороговое значение для определения изменений
    threshold = 65

    # Пороговая обработка изображений
    _, thresh1 = cv2.threshold(diff1, threshold, 255, cv2.THRESH_BINARY)
    _, thresh2 = cv2.threshold(diff2, threshold, 255, cv2.THRESH_BINARY)

    # Объединение пороговых изображений
    bitwise_and = cv2.bitwise_and(thresh1, thresh2)

    # Подсчет количества изменений
    count = np.count_nonzero(bitwise_and)

    return count > 0, bitwise_and

def main():
    # Инициализация камеры
    cap = cv2.VideoCapture(1)

    # Захват изображений
    _, img1 = cap.read()
    _, img2 = cap.read()
    _, img3 = cap.read()

    while True:
        # Захват нового изображения
        _, new_img = cap.read()

        # Сравнение изображений
        has_changes, diff_img = compare_images(img1, img2, new_img)

        # Обновление изображений
        img1 = img2
        img2 = new_img

        # Вывод результата
        if has_changes:
            print("Изображение изменилось")
            cv2.imshow("Измененное изображение", diff_img)
        else:
            print("Изображение не изменилось")

        # Задержка в 0,5 секунды
        time.sleep(0.5)

        # Обработка нажатия клавиши 'q' для выхода из программы
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Освобождение ресурсов
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()