const btnLogin = document.getElementById('btn-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const characters = document.getElementById('counter');

btnLogin.addEventListener('click', () => {
  const email = 'tryber@teste.com';
  const passoword = '123456';

  if (email === inputEmail.value && passoword === inputPassword.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checked = () => {
  btnSubmit.disabled = !checkBox.checked;
};

checkBox.addEventListener('change', checked);

const counterCharacter = () => {
  const character = textArea.value.length;

  const maxCharacter = 500;

  const counter = maxCharacter - character;

  characters.innerText = `${counter} caracteres`;
};

textArea.oninput = counterCharacter;
