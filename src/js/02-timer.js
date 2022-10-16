import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import 'flatpickr/dist/themes/light.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startButton: document.querySelector('[data-start]'),
  myInput: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// const date = new Date();
const date = new Date();
const choiceDatesByFormat = {};
let choiceDatesByMiliseconds = null;
let timerId = null;
refs.startButton.disabled = true;

const options = {
  locale: Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= date) {
      refs.startButton.disabled = true;
      alert('Please choose a date in the future');
    } else {
      refs.startButton.disabled = false;
      return (choiceDatesByMiliseconds = selectedDates[0] - date);
    }
  },
  // minDate: new Date(),
};

const fp = flatpickr(refs.myInput, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  choiceDatesByFormat.days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  choiceDatesByFormat.hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  choiceDatesByFormat.minutes = addLeadingZero(
    Math.floor(((ms % day) % hour) / minute)
  );
  // Remaining seconds
  choiceDatesByFormat.seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  choiceDatesByMiliseconds -= 1000;
  return choiceDatesByFormat;
}

function changeTimerValue(value) {
  const { days, hours, minutes, seconds } = value;
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function handlerTimerStart() {
  changeTimerValue(convertMs(choiceDatesByMiliseconds));
  refs.startButton.disabled = true;
  refs.myInput.setAttribute('disabled', '');
  timerId = setInterval(() => {
    if (
      (refs.days.textContent === '00') &
      (refs.hours.textContent === '00') &
      (refs.minutes.textContent === '00') &
      (refs.seconds.textContent === '00')
    ) {
      refs.startButton.disabled = false;
      refs.myInput.removeAttribute('disabled');
      return clearInterval(timerId);
    } else {
      changeTimerValue(convertMs(choiceDatesByMiliseconds));
    }
  }, 1000);
}

refs.startButton.addEventListener('click', handlerTimerStart);
