function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let changeColorInterval = null;

buttonStart.disabled = false;
buttonStop.disabled = true;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  changeBodyColor();
  changeColorInterval = setInterval(changeBodyColor, 1000);
}

function onStop() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(changeColorInterval);
}
