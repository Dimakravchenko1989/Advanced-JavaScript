/* Задание 2.
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие 
или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, 
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
*/

const initialData = [
    {
      product: "Apple iPhone 14",
      reviews: [
        {
          id: "1",
          text: "Пользуюсь неделю, покупкой доволен",
        },
        {
          id: "2",
          text: "Отличный смартфон, нареканий ноль",
        },
      ],
    },
    {
      product: "Samsung Galaxy S23",
      reviews: [
        {
          id: "3",
          text: "Проверки все прошел, упаковка и комплектация целая, претензий нет. Дальше будет видно по мере использования",
        },
      ],
    },
    {
      product: "Xiaomi 13 Ultra",
      reviews: [
        {
          id: "4",
          text: "Офигенный телефон, Самсунг отдыхает, хорошая мощность, камера, кол-во памяти, и все за приемлемую цену, зарядка 90 ватт просто пушка",
        },
      ],
    },
  ];
  
  const userInput = document.querySelector('.user_input');
  const sendBtn = document.querySelector('.send_btn');
  const reviews = document.querySelector('.reviews');
  const divError = document.querySelector('.error_msg');
  
  initialData.forEach(element => {
      const productName = document.createElement('h3');
      productName.textContent = element.product;
      reviews.appendChild(productName);
      element.reviews.forEach(review => {
          const defaultReview = document.createElement('p');
          defaultReview.textContent = review.text;
          reviews.appendChild(defaultReview);
      });
  });
  
  
  sendBtn.addEventListener('click', function () {
      try {
          if (userInput.value.trim().length < 20 || userInput.value.trim().length > 500) {
              throw new Error ('Несоответствующая длина текста')
          }
          const reviewElem = document.createElement('p');
          reviewElem.textContent = (userInput.value);
          reviews.appendChild(reviewElem);
          divError.textContent = '';
      } catch (error) {
          divError.textContent = error.message;
      }
  });