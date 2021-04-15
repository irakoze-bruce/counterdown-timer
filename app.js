/** @format */

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");

let newYears = "1 Jan 2022";

function countdow() {
  let newYearsDate = new Date(newYears);
  let currentDate = new Date();

  let totalSeconds = (newYearsDate - currentDate) / 1000;

  let totalDays = Math.floor(totalSeconds / 3600 / 24);
  let totalHours = Math.floor(totalSeconds / 3600) % 24;
  let totalMin = Math.floor(totalSeconds / 60) % 60;
  let totalSec = Math.floor(totalSeconds) % 60;

  days.innerHTML = formatTime(totalDays);
  hours.innerHTML = formatTime(totalHours);
  mins.innerHTML = formatTime(totalMin);
  seconds.innerHTML = formatTime(totalSec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdow, 1000);
