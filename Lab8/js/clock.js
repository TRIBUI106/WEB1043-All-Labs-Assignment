const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem("countdown") || false;

if (savedValue) {
    startClock(savedValue);
    inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
}

endDate.addEventListener("change", function (e) {
    e.preventDefault();
    clearInterval(timeInterval);
    const temp = new Date(endDate.value);
    localStorage.setItem("countdown", temp);
    startClock(temp);
    timeStop = true;
});

function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}

function updateClock(endtime) {
    let t = timeLeft(endtime);
    clock.querySelector(".days").innerText = t.days;
    clock.querySelector(".hours").innerText = t.hours;
    clock.querySelector(".minutes").innerText = t.minutes;
    clock.querySelector(".seconds").innerText = t.seconds;
    if (t.total <= 0) {
        clearInterval(timeInterval);
    }
}

function startClock(d) {
    let endtime = new Date(d);
    timeInterval = setInterval(function () {
        updateClock(endtime);
    }, 1000);
}
