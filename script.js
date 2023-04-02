const timer = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let seconds = 1500;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds--;
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        timer.textContent = `${minutes}:${remainingSeconds}`;
        if (seconds === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 1500;
    timer.textContent = "25:00";
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
