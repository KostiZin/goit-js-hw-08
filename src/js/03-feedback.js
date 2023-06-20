import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

const KEY = 'feedback-form-state';

// let currentData = {
//   email: '',
//   message: '',
// };

let currentData = JSON.parse(localStorage.getItem(KEY)) || {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(handleEmail, 500));
formEl.addEventListener('submit', handleSubmit);

function handleEmail() {
  currentData.email = inputEmail.value.trim();
  currentData.message = inputMessage.value.trim();
  localStorage.setItem(KEY, JSON.stringify(currentData));
}

// currentData = JSON.parse(localStorage.getItem(KEY)) || {
//   email: '',
//   message: '',
// };

updateValue();

function updateValue() {
  if (JSON.parse(localStorage.getItem(KEY)) !== null) {
    inputEmail.value = currentData.email;
    inputMessage.value = currentData.message;
  } else {
    inputEmail.value = '';
    inputMessage.value = '';
  }
}

function handleSubmit(evt) {
  if (inputEmail.value === '' || inputMessage.value === '') {
    return alert('All fields must be completed!');
  }
  evt.preventDefault();
  console.log(currentData);
  formEl.reset();
  localStorage.removeItem(KEY);
}
