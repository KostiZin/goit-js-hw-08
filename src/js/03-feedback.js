import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const btnEl = document.querySelector('button');

const KEY = 'feedback-form-state';

let currentData = {
  email: '',
  message: '',
};

// const { email, message } = currentData;

formEl.addEventListener('input', throttle(handleEmail, 500));

// formEl.addEventListener('submit', handleSubmit);
// ????????????????????????????????????????

function handleEmail(evt) {
  currentData.email = inputEmail.value.trim();
  currentData.message = inputMessage.value.trim();
  localStorage.setItem(KEY, JSON.stringify(currentData));
}

// function handleEmail(evt) {
//   if (evt.target.nodeName === 'INPUT') {
//     currentData.email = evt.target.value.trim();
//   } else {
//     currentData.message = evt.target.value.trim();
//   }

//   return localStorage.setItem(KEY, JSON.stringify(currentData));
// }

currentData = JSON.parse(localStorage.getItem(KEY)) || {
  email: '',
  message: '',
};

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
// ????????????????????????????????????
// function handleSubmit(evt) {
//   evt.preventDefault();
//   localStorage.removeItem(KEY);
// }
// ??????????????????????????????????????

console.log(currentData);
