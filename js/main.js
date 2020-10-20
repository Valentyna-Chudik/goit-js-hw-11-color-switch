import { colors } from "./color-palette.js";

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', onStartBtnColorSwitch);
refs.stop.addEventListener('click', onStopBtnColorSwitch);

let intervalId = null;

function onStartBtnColorSwitch() {
   intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
   }, 1000);
  
  refs.start.removeEventListener('click', onStartBtnColorSwitch);
};
 
function onStopBtnColorSwitch() {
  clearInterval(intervalId);

  refs.start.addEventListener('click', onStartBtnColorSwitch);
};