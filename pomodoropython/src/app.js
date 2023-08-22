const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let running = false;
let interval;
let minutes = 25;
let seconds = 0;

function updateDisplay() {
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

startStopBtn.addEventListener("click", function() {
    if (running) {
        clearInterval(interval);
        startStopBtn.textContent = "Start";
    } else {
        interval = setInterval(function() {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(interval);
                alert("Time's up!");
            }
            updateDisplay();
        }, 1000);

        startStopBtn.textContent = "Stop";
    }
    running = !running;
});

resetBtn.addEventListener("click", function() {
    clearInterval(interval);
    minutes = 25;
    seconds = 0;
    running = false;
    startStopBtn.textContent = "Start";
    updateDisplay();
});
