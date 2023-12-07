const btnLogin = document.getElementById('btn-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const characters = document.getElementById('counter');
const forms = document.getElementById('evaluation-form');
const main = document.getElementById('main');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const hofs = document.getElementById('hofs');
const jest = document.getElementById('jest');
const promises = document.getElementById('promises');
const react = document.getElementById('react');
const sql = document.getElementById('sql');
const python = document.getElementById('python');
const rate = document.getElementsByName('rate');
const observation = document.getElementById('textarea');

btnLogin.addEventListener('click', () => {
  const testEmail = 'tryber@teste.com';
  const passoword = '123456';

  if (testEmail === inputEmail.value && passoword === inputPassword.value) {
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

const createName = (creatDiv) => {
  const name = document.createElement('p');
  creatDiv.appendChild(name);
  name.textContent = `Nome: ${firstName.value} ${lastName.value}`;
};

const createEmail = (creatDiv) => {
  const name = document.createElement('p');
  creatDiv.appendChild(name);
  name.textContent = `Email: ${email.value}`;
};

const createHouse = (creatDiv) => {
  const name = document.createElement('p');
  creatDiv.appendChild(name);
  name.textContent = `Casa: ${house.value}`;
};

const createFamily = (creatDiv) => {
  let familySelectd = [];

  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      familySelectd = family[i];
    }
  }

  const name = document.createElement('p');
  creatDiv.appendChild(name);

  if (familySelectd.value === undefined) {
    name.textContent = 'Família:';
  } else {
    name.textContent = `Família: ${familySelectd.value}`;
  }
};

const responseContent = () => {
  const content = [hofs, jest, promises, react, sql, python];
  const contentSelected = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      contentSelected.push(content[i].value);
    }
  }
  return contentSelected;
};

const createContent = (creatDiv) => {
  const contentSelected = responseContent();
  let contentSelectedString = '';
  const name = document.createElement('p');
  creatDiv.appendChild(name);

  for (let i = 0; i < contentSelected.length; i += 1) {
    contentSelectedString += `${contentSelected[i]}, `;
  }
  const newString = contentSelectedString.slice(0, -2);
  name.textContent = `Matérias: ${newString}`;

  if (contentSelected) {
    name.textContent = `Matérias: ${newString}`;
  } else {
    name.textContent = 'Matérias:';
  }
};

const createRate = (creatDiv) => {
  let rateSelectd = [];

  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      rateSelectd = rate[i];
    }
  }

  const name = document.createElement('p');
  creatDiv.appendChild(name);

  if (rateSelectd.value === undefined) {
    name.textContent = 'Avaliação:';
  } else {
    name.textContent = `Avaliação: ${rateSelectd.value}`;
  }
};

const createObservation = (creatDiv) => {
  const name = document.createElement('p');
  creatDiv.appendChild(name);
  name.textContent = `Observações: ${observation.value}`;
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  forms.style.display = 'none';
  const creatDiv = document.createElement('div');
  creatDiv.id = 'form-data';
  main.insertBefore(creatDiv, main.firstChild);
  const title = document.createElement('h1');
  creatDiv.appendChild(title);
  title.textContent = 'Avaliação Concluída!';
  createName(creatDiv);
  createEmail(creatDiv);
  createHouse(creatDiv);
  createFamily(creatDiv);
  createContent(creatDiv);
  createRate(creatDiv);
  createObservation(creatDiv);
});
