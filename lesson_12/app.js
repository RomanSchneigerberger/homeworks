
// Задание 1
document.getElementById('bg_color').addEventListener('click', changeBackgroundColor);
function getRandomHex() {
    var hex = Math.floor(Math.random() * 256).toString(16);
    return hex.padStart(2, '0');
}


function changeBackgroundColor() {
    var color = `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
    document.body.style.backgroundColor = color;
}

// Задание2
var input = document.getElementById('username');
var greeting = document.getElementById('greeting');

input.addEventListener('input', function () {
    var name = input.value;
    if (name) {
        greeting.textContent = `Привет, ${name}!`;
    } else {
        greeting.textContent = 'Привет, неизвестный!';
    }
});