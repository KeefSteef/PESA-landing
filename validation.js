// Одержуємо посилання на форму та її поля
const form = document.querySelector(".contacts__form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".msg-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Початково вважаємо, що всі поля валідні
  let isValid = true;

  // 1. Перевірка імені
  if (!validateName(nameInput.value)) {
    alert("Введіть коректне ім'я (мінімум 2 символи)!");
    isValid = false;
  }

  // 2. Перевірка email
  if (!validateEmail(emailInput.value)) {
    alert("Введіть коректний e-mail!");
    isValid = false;
  }

  // 3. Перевірка повідомлення
  if (!validateMessage(messageInput.value)) {
    alert("Повідомлення має містити принаймні 5 символів!");
    isValid = false;
  }

  // Якщо всі поля валідні, відправляємо форму
  if (isValid) {
    console.log("Форма валідна! Відправляємо дані...");
    form.submit();
  }
});

// Перевірка імені (мінімум 2 символи)
function validateName(name) {
  return name.trim().length >= 2;
}

// Перевірка e-mail за допомогою простого регулярного виразу
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.trim());
}

// Перевірка повідомлення (мінімум 5 символів)
function validateMessage(message) {
  return message.trim().length >= 5;
}
