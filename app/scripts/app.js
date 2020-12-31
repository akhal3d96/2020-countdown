import './vendor';

const ONE_SECOND = 1000;
const TEN_SECONDS = ONE_SECOND * 10;
const YEAR = 2021;
const MONTH = 0;
const DAY = 1;
const HOUR = 0;

const localDateOptins = { year: 'numeric', month: 'long', day: 'numeric' };

const finalTime = new Date(YEAR, MONTH, DAY, HOUR);
// const finalTime = new Date(new Date().getTime() + 9000);

const hoursElement = document.getElementsByClassName('hours')[0];
const minutesElement = document.getElementsByClassName('minutes')[0];
const secondsElement = document.getElementsByClassName('seconds')[0];

const dateElement = document.getElementsByClassName('date')[0];

const fireworksElement = document.getElementsByClassName('pyro-disabled')[0];

const marwanPablo = document.getElementsByClassName('pablo')[0];

const interval = window.setInterval(() => {
  const now = new Date();

  const distance = finalTime.getTime() - now.getTime();
  console.log(distance);
  if (distance <= 0) {
    window.clearInterval(interval);
    fireworksElement.className = 'pyro';
    const audio = new Audio('/media/fireworks.mp3');
    audio.play();

    const timeout = window.setTimeout(() => {
      audio.pause();
      // fireworksElement.className = 'pyro-disabled';

      // Play pablo
      marwanPablo.style.display = 'block';
      marwanPablo.play();

      clearTimeout(timeout);
    }, TEN_SECONDS);

    return;
  }

  const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  dateElement.innerHTML = now.toLocaleDateString('en-EG', localDateOptins);
  hoursElement.innerHTML = remainingHours.toString();
  minutesElement.innerHTML = remainingMinutes.toString();
  secondsElement.innerHTML = remainingSeconds.toString();
}, ONE_SECOND);
