const links = document.querySelectorAll('a');

// Перебираем ссылки
links.forEach(link => {
  // Создаем теневой элемент
  const shadow = link.attachShadow({ mode: 'open' });

  // Создаем элемент для отображения контента ссылки
  const content = document.createElement('span');
  content.textContent = link.textContent;

  // Добавляем контент в теневой элемент
  shadow.appendChild(content);
});

// При завершении работы удаляем созданные объекты
window.addEventListener('beforeunload', () => {
  links.forEach(link => {
    const shadow = link.shadowRoot;
    if (shadow) {
      const content = shadow.querySelector('span');
      shadow.removeChild(content);
      link.detachShadow(shadow);
    }
  });
});
