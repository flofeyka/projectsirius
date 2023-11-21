import cv2


cap = cv2.VideoCapture(0)
ret, frame = cap.read()
cap.release()

cv2.imwrite('my_image.jpg', frame)

print("Изображение сохранено.")