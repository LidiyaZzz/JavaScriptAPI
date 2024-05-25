const apiKey = 'MS9yKFFQNsSomdKtbEXWbHs2ZWYiRogh1ITeO2nd9tc';
const photoElement = document.getElementById('photo');
    const photographerNameElement = document.getElementById('photographer-name');
    const likeCountElement = document.getElementById('like-count');
    const historyList = document.getElementById('history-list');

    // Получение случайного изображения из Unsplash
    async function getRandomPhoto() {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        photoElement.src = data.urls.regular;
        photographerNameElement.textContent = `Фотограф: ${data.user.name}`;
        addToHistory(data.urls.regular, data.user.name);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }

    // Функция "лайка"
    const btnLike = document.querySelector('.like-button');

    btnLike.addEventListener('click', (e) => {
      let likeCount = parseInt(likeCountElement.textContent);
      likeCount++;
      likeCountElement.textContent = likeCount;
      localStorage.setItem('likeCount', likeCount);
    })

    // Загрузка количества лайков из локального хранилища
    let savedLikeCount = localStorage.getItem('likeCount');
    if (savedLikeCount) {
      likeCountElement.textContent = savedLikeCount;
    }

    // Добавление фото в историю просмотров
    function addToHistory(photoUrl, photographerName) {
      const historyItem = document.createElement('li');
      const photoLink = document.createElement('a');
      photoLink.href = photoUrl;
      photoLink.textContent = photographerName;
      historyItem.appendChild(photoLink);
      historyList.appendChild(historyItem);
    }

    // Получение случайного фото при загрузке страницы
    getRandomPhoto();