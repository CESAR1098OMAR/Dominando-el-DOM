const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.children[0];
const generateBtn = document.querySelector('.generator form button');
const includeNumbers = document.getElementById('include-numbers');
const includeUppercase = document.getElementById('include-uppercase');
const includeSymbols = document.getElementById('include-symbols');
const copyBtn = document.getElementById('copy-password');

const handleChange = () => {
  const inputValue = inputRange.value;
  const lengthCounter = document.querySelector('.range-container h1');
  lengthCounter.textContent = inputValue;
};

const generatePassword = (passwordLength, useNumbers, useUppercase, useSymbols) => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) characters += '0123456789';
    if (useSymbols) characters += '#$-_~';
    
    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const printPassword = (event) => {
  event.preventDefault(); // Previene que el formulario se envíe por defecto
  const passwordLength = inputRange.value;
  const password = generatePassword(passwordLength, includeNumbers.checked, includeUppercase.checked, includeSymbols.checked);
  const passwordHeading = document.querySelector('.password-container h1');
  passwordHeading.textContent = password;
};

const copyToClipboard = () => {
  const passwordText = document.querySelector('.password-container h1').textContent;
  navigator.clipboard.writeText(passwordText).then(() => {
    const message = document.createElement('div');
    message.textContent = '¡Copiado!';
    message.style.position = 'absolute';
    message.style.background = 'royalblue';
    message.style.color = 'white';
    message.style.padding = '5px 10px';
    message.style.borderRadius = '5px';
    message.style.top = '10px';
    message.style.right = '10px';
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar', err);
  });
};

inputRange.addEventListener('change', () => handleChange());
generateBtn.addEventListener('click', (event) => printPassword(event));
copyBtn.addEventListener('click', copyToClipboard);
