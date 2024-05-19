// Загрузка данных о занятиях из JSON
fetch('classes.json')
  .then(response => response.json())
  .then(data => {
    const classesContainer = document.getElementById('classes');

    data.forEach(classData => {
      const classElement = document.createElement('div');
      classElement.classList.add('col-md-6', 'mb-4');

      const cardElement = document.createElement('div');
      cardElement.classList.add('class-card', 'bg-light', 'p-4');

      const titleElement = document.createElement('h3');
      titleElement.classList.add('card-title');
      titleElement.textContent = classData.title;

      const timeElement = document.createElement('p');
      timeElement.classList.add('card-text');
      timeElement.textContent = `Время: ${classData.time}`;

      const capacityElement = document.createElement('p');
      capacityElement.classList.add('card-text');
      capacityElement.textContent = `Максимум участников: ${classData.capacity}`;

      const attendeesElement = document.createElement('p');
      attendeesElement.classList.add('card-text');
      attendeesElement.textContent = `Записано участников: ${classData.attendees}`;

      const buttonElement = document.createElement('button');
      buttonElement.classList.add('btn', 'btn-primary');
      buttonElement.textContent = 'Записаться';
      buttonElement.disabled = classData.attendees >= classData.capacity;
      buttonElement.addEventListener('click', () => {
        classData.attendees++;
        attendeesElement.textContent = `Записано участников: ${classData.attendees}`;
        buttonElement.disabled = classData.attendees >= classData.capacity;
      });

      const cancelButtonElement = document.createElement('button');
      cancelButtonElement.classList.add('btn', 'btn-danger', 'ml-2');
      cancelButtonElement.textContent = 'Отменить запись';
      cancelButtonElement.addEventListener('click', () => {
        classData.attendees--;
        attendeesElement.textContent = `Записано участников: ${classData.attendees}`;
        buttonElement.disabled = classData.attendees >= classData.capacity;
      });

      cardElement.appendChild(titleElement);
      cardElement.appendChild(timeElement);
      cardElement.appendChild(capacityElement);
      cardElement.appendChild(attendeesElement);
      cardElement.appendChild(buttonElement);
      cardElement.appendChild(cancelButtonElement);

      classElement.appendChild(cardElement);
      classesContainer.appendChild(classElement);
    });
  })
  .catch(error => console.error('Ошибка при загрузке данных:', error));