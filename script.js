document.addEventListener('DOMContentLoaded', function() {
  const sendPopup = document.getElementById('send-popup');
  const receivePopup = document.getElementById('receive-popup');
  const confirmPopup = document.getElementById('confirm-popup');
  const closeSendPopup = document.getElementById('close-send-popup');
  const closeReceivePopup = document.getElementById('close-receive-popup');
  const closeConfirmPopup = document.getElementById('close-confirm-popup');
  const buyButtons = document.querySelectorAll('.buy-button');
  const confirmTitle = document.getElementById('confirm-title');
  const confirmText = document.getElementById('confirm-text');

  document.getElementById('send-crypto-btn').onclick = function() {
      sendPopup.style.display = 'block';
  };

  document.getElementById('receive-crypto-btn').onclick = function() {
      receivePopup.style.display = 'block';
  };

  closeSendPopup.onclick = function() {
      sendPopup.style.display = 'none';
  };

  closeReceivePopup.onclick = function() {
      receivePopup.style.display = 'none';
  };

  closeConfirmPopup.onclick = function() {
      confirmPopup.style.display = 'none';
  };

  // Обработка кликов на кнопки "Купить" в таблице заявок
  buyButtons.forEach((button, index) => {
      button.onclick = function() {
          const row = button.closest('tr');
          const amount = row.cells[0].innerText; // Получаем количество из первой ячейки
          const totalPrice = row.cells[1].innerText; // Получаем сумму из второй ячейки
          const rate = row.cells[2].innerText; // Получаем курс из третьей ячейки
          
          confirmTitle.innerText = 'Купить криптовалюту?';
          confirmText.innerText = `Вы хотите купить ${amount} BTC за ${totalPrice} ₽ по курсу ${rate} RUB/BTC.`;
          confirmPopup.style.display = 'block'; // Показываем попап
      };
  });

  // Скрытие попапа при клике вне попапа
  const popups = [confirmPopup, sendPopup, receivePopup];
  window.onclick = function(event) {
      popups.forEach(popup => {
          if (event.target === popup) {
              popup.style.display = 'none';
          }
      });
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const sendPopup = document.getElementById('send-popup');
  const receivePopup = document.getElementById('receive-popup');
  const confirmPopup = document.getElementById('confirm-popup');
  const successPopup = document.getElementById('success-popup');

  // Закрытие попапов
  document.getElementById('close-send-popup').onclick = function() {
      sendPopup.style.display = 'none';
  };

  document.getElementById('close-receive-popup').onclick = function() {
      receivePopup.style.display = 'none';
  };

  document.getElementById('close-confirm-popup').onclick = function() {
      confirmPopup.style.display = 'none';
  };

  document.getElementById('close-success-popup').onclick = function() {
      successPopup.style.display = 'none';
  };

  // Обработка отправки формы обратной связи
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.onsubmit = function(event) {
          event.preventDefault(); // Предотвращаем отправку формы
          successPopup.style.display = 'block'; // Показываем попап
          contactForm.reset(); // Очистка формы
      };
  }

  // Обработка кликов на кнопки "Купить" в таблице заявок
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach((button, index) => {
      button.onclick = function() {
          const row = button.closest('tr');
          const amount = row.cells[0].innerText; // Получаем количество из первой ячейки
          const totalPrice = row.cells[1].innerText; // Получаем сумму из второй ячейки
          const rate = row.cells[2].innerText; // Получаем курс из третьей ячейки
          
          const confirmTitle = document.getElementById('confirm-title');
          const confirmText = document.getElementById('confirm-text');
          confirmTitle.innerText = 'Купить криптовалюту?';
          confirmText.innerText = `Вы хотите купить ${amount} BTC за ${totalPrice} ₽ по курсу ${rate} RUB/BTC.`;
          confirmPopup.style.display = 'block'; // Показываем попап
      };
  });

  // Скрытие попапа при клике вне попапа
  const popups = [confirmPopup, sendPopup, receivePopup, successPopup];
  window.onclick = function(event) {
      popups.forEach(popup => {
          if (event.target === popup) {
              popup.style.display = 'none';
          }
      });
  };
});
