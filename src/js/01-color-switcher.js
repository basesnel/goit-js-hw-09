const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;

let timerId = null;
const INTERVAL_DELAY = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonSwitch = () =>
  (stopBtn.disabled = !(startBtn.disabled = !startBtn.disabled));

const startSwith = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
  buttonSwitch();
};

const stopSwitch = () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  buttonSwitch();
};

startBtn.addEventListener('click', startSwith);

stopBtn.addEventListener('click', stopSwitch);
