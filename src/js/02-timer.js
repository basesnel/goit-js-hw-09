// Interface elements.
const refs = {
  picker: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
};

// PickerDate times.
let pickerTime = null;
let timeoutId = null;

// Alert constants.
const alert = document.createElement('p');
const ALERT_DELAY = 3000;

// Timer object.
const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = pickerTime - currentTime;
      updateTimerInterface(getTimeComponents(deltaTime));
    }, 1000);
  },

  stop() {
    updateTimerInterface(getTimeComponents(0));
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

// Alert create, stylization and event-generation.
document.body.append(alert);
alert.textContent = 'Please choose a date in the future';
alert.classList.add('alert', 'js-hidden');
alert.addEventListener('click', onHideAlert);

// Input stylization.
refs.picker.type = 'datetime-local';
refs.picker.classList.add('timepicker');
refs.picker.addEventListener('change', checkDate);

// Button stylization.
refs.start.disabled = true;
refs.start.classList.add('startbtn');
refs.start.addEventListener('click', timer.start.bind(timer));

// Alert hide onclick-event.
function hideAlert() {
  alert.classList.add('js-hidden');
}

// Alert setTimeout hide.
function onHideAlert() {
  hideAlert();
  if (timeoutId) clearTimeout(timeoutId);
}

// Check datepicker for future.
function checkDate() {
  timer.stop();
  const nowTime = Date.now();
  pickerTime = new Date(this.value).getTime();

  if (nowTime < pickerTime) {
    refs.start.disabled = false;
    onHideAlert();
    return;
  }

  refs.start.disabled = true;
  alert.classList.remove('js-hidden');
  timeoutId = setTimeout(() => {
    hideAlert();
  }, ALERT_DELAY);
}

// Get time components functions.
function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// Set time components on web-page.
function updateTimerInterface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

// Examples on getUTC times.

// console.log(
//   `${pad(new Date(deltaTime).getUTCHours())}:${pad(
//     new Date(deltaTime).getUTCMinutes()
//   )}:${pad(new Date(deltaTime).getUTCSeconds())}`
// );
// console.log(new Date(deltaTime).getUTCMinutes());
// console.log(new Date(deltaTime).getUTCSeconds());
