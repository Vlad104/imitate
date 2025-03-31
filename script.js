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

  // document.getElementById('close-success-popup').onclick = function() {
  //     successPopup.style.display = 'none';
  // };

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

document.getElementById('confirm-send').addEventListener('click', function() {
  // Получаем значения из полей (если нужно)
  const address = document.getElementById('send-address').value;
  const currency = document.getElementById('send-currency').value;
  const amount = document.getElementById('send-amount').value;

  // Здесь можно добавить код для обработки транзакции (например, API-запрос)

  // Показываем сообщение о транзакции
  const message = document.getElementById('transaction-message');
  message.style.display = 'block';

  // Скрываем попап
  document.getElementById('send-popup').style.display = 'none';

  // Сбрасываем поля ввода (опционально)
  document.getElementById('send-address').value = '';
  document.getElementById('send-amount').value = '';
});

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   // Предотвращаем отправку формы
//   event.preventDefault();

//   // Получаем значения email и сообщения
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   // Здесь можно добавить код для обработки отправки сообщения, если требуется
//   console.log('Email:', email);
//   console.log('Message:', message);

//   // Показываем попап с сообщением об успешной отправке
//   const successPopup = document.getElementById('success-popup');
//   successPopup.style.display = 'block';

//   // Закрываем попап через 3 секунды
//   setTimeout(() => {
//       successPopup.style.display = 'none';
//   }, 3000); // 3000 миллисекунд = 3 секунды

//   // Также можно очистить поля после успешной отправки
//   document.getElementById('email').value = '';
//   document.getElementById('message').value = '';
// });

// Обработчик для кнопки "Пополнить"
document.getElementById('deposit-btn').addEventListener('click', function() {
  document.getElementById('deposit-popup').style.display = 'block';
});

// Обработчик для кнопки "Вывести"
document.getElementById('withdraw-btn').addEventListener('click', function() {
  document.getElementById('withdraw-popup').style.display = 'block';
});

// Обработчик для закрытия попапа пополнения
document.getElementById('close-deposit-popup').addEventListener('click', function() {
  document.getElementById('deposit-popup').style.display = 'none';
});

// Обработчик для закрытия попапа вывода
document.getElementById('close-withdraw-popup').addEventListener('click', function() {
  document.getElementById('withdraw-popup').style.display = 'none';
});

// Закрытие попапа по клику вне его
window.addEventListener('click', function(event) {
  const depositPopup = document.getElementById('deposit-popup');
  const withdrawPopup = document.getElementById('withdraw-popup');
  if (event.target === depositPopup) {
      depositPopup.style.display = 'none';
  }
  if (event.target === withdrawPopup) {
      withdrawPopup.style.display = 'none';
  }
});

// Обработка подтверждения пополнения
document.getElementById('confirm-deposit').addEventListener('click', function() {
  const cardNumber = document.getElementById('deposit-card-number').value;
  const amount = document.getElementById('deposit-amount').value;
  console.log('Пополнение на сумму:', amount, 'с карты:', cardNumber);
  document.getElementById('deposit-popup').style.display = 'none'; // Закрыть попап
});

// Обработка подтверждения вывода
document.getElementById('confirm-withdraw').addEventListener('click', function() {
  const cardNumber = document.getElementById('withdraw-card-number').value;
  const amount = document.getElementById('withdraw-amount').value;
  console.log('Вывод на сумму:', amount, 'на карту:', cardNumber);
  document.getElementById('withdraw-popup').style.display = 'none'; // Закрыть попап
});
