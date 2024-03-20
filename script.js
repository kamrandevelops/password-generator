const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let chars = '';
  const length = lengthInput.value;

  if (uppercaseCheckbox.checked) {
    chars += uppercaseChars;
  }

  if (lowercaseCheckbox.checked) {
    chars += lowercaseChars;
  }

  if (numbersCheckbox.checked) {
    chars += numberChars;
  }

  if (symbolsCheckbox.checked) {
    chars += symbolChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);