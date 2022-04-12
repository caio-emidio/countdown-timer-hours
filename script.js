Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const endDate = new Date().addHours(4);

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (endDate - currentDate) / 1000

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// Initial Call
countdown();

setInterval(countdown, 1000);