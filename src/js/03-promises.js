import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  for (
    let i = 1, j = parseInt(delay.value, 10);
    i <= amount.value;
    i += 1, j += parseInt(step.value, 10)
  ) {
    createPromise(i, j)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
