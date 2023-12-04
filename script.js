const btnLogin = document.getElementById('btn-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

btnLogin.addEventListener('click', () => {
  const email = 'tryber@teste.com';
  const passoword = '123456';

  if (email === inputEmail.value && passoword === inputPassword.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
