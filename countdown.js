const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secondEl = document.getElementById("sec");



const date = "3 July 2022";

function countdown() {
    const birthdate = new Date(date);
    const currentdate = new Date();

    const diff = birthdate - currentdate;

    const seconds = diff / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=(Math.floor(seconds/60))%60;
    const seconds_final=Math.floor(seconds)%60;

    dayEl.innerHTML=days;
    hourEl.innerHTML=hours;
    minuteEl.innerHTML=minutes;
    secondEl.innerHTML=seconds_final;

}

countdown();

setInterval(countdown,1000)