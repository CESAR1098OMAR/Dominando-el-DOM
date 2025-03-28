# Dominando-el-DOM

# Generador de Contraseñas Aleatorias

## Descripción
Este proyecto es un **Generador de Contraseñas Aleatorias** desarrollado con **HTML, CSS y JavaScript**. Permite generar contraseñas seguras con opciones personalizadas, como incluir números, letras mayúsculas y símbolos.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)

## Estructura del Proyecto
```
/
├── index.html        # Estructura principal de la página
├── styles.css        # Estilos para la interfaz
├── script.js         # Lógica para generar contraseñas
├── README.md         # Documentación del proyecto
```

## Código Fuente

### HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/styles.css">
    <script src="./apps/apps.js" defer></script>
    <title>Generador de Contraseñas</title>
</head>
<body>
    <div class="titulo">
        <h2>Genera tu contraseña</h2>
    </div>
    <div class="generator">
        <div class="password-container">
            <h1>Abracadabra</h1>
            <button id="copy-password">Copiar</button>
        </div>
        <form class="contrasena">
            <div class="largo">
                <label for="input-password-length">Largo de la contraseña</label>
                <div class="range-container">
                    <input type="range" min="8" max="24" id="input-password-length">
                    <h1>8</h1>
                </div>
            </div>
            <div class="casillas">
                <ul>
                    <li><label><input type="checkbox" id="include-uppercase"> Incluir mayúsculas</label></li>
                    <li><label><input type="checkbox" id="include-numbers"> Incluir números</label></li>
                    <li><label><input type="checkbox" id="include-symbols"> Incluir símbolos</label></li>
                </ul>
            </div>
            <div class="boton">
                <button>Generar</button>
            </div>
        </form>
    </div>
</body>
</html>
```

### CSS (`styles.css`)
```css
* {
    font-family: "Courier Prime", monospace;
}

body {
    background-color: rgb(1, 0, 44);
}

.titulo {
    background-color: rgb(127, 147, 207);
    display: flex;
    justify-content: center;
    margin: 1rem 30rem;
}

button:hover {
    background-color: rgb(60, 85, 198);
    color: aliceblue;
}
```

### JavaScript (`script.js`)
```js
const inputRange = document.querySelector('.range-container input');
const generateBtn = document.querySelector('.generator button');
const includeNumbers = document.getElementById('include-numbers');
const includeUppercase = document.getElementById('include-uppercase');
const includeSymbols = document.getElementById('include-symbols');
const copyBtn = document.getElementById('copy-password');

const generatePassword = (length, useNumbers, useUppercase, useSymbols) => {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) characters += '0123456789';
    if (useSymbols) characters += '#$-_~';
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value, includeNumbers.checked, includeUppercase.checked, includeSymbols.checked);
    document.querySelector('.password-container h1').textContent = password;
});

copyBtn.addEventListener('click', () => {
    const password = document.querySelector('.password-container h1').textContent;
    navigator.clipboard.writeText(password).then(() => alert('Contraseña copiada!'));
});
```

## Uso
1. Ajusta la longitud de la contraseña con el control deslizante.
2. Selecciona las opciones deseadas (mayúsculas, números, símbolos).
3. Presiona el botón "Generar" para crear una nueva contraseña.
4. Usa el botón "Copiar" para guardarla en el portapapeles.
