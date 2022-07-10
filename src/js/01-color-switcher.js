const btnStartEl = document.querySelector("[data-start]");
const btnStopEl = document.querySelector("[data-stop]");
let changeColor = null;

btnStopEl.setAttribute('disabled', '');

btnStartEl.addEventListener('click', onButtonStartClick);
btnStopEl.addEventListener('click', onButtonStopClick);

function onButtonStartClick() {
    changeColor = setInterval(changeBodyBackgroundColor, 1000);
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
}

function onButtonStopClick() {
    clearInterval(changeColor);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function changeBodyBackgroundColor() {
      document.body.style.backgroundColor = getRandomHexColor();
  }