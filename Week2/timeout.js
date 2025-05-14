const countdownEl = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const customTimeInput = document.getElementById('customTime');
const messageEl = document.getElementById('message');

let time = 10;
let interval = null;
let isPaused = false;

function startCountdown() {
    clearInterval(interval); // Reset if already running
    messageEl.textContent = '';
    if (customTimeInput.value) {
        time = parseInt(customTimeInput.value);
    }
    countdownEl.textContent = time;

    interval = setInterval(() => {
        if (!isPaused) {
            time--;
            countdownEl.textContent = time;
            if (time <= 0) {
                clearInterval(interval);
                countdownEl.textContent = "0";
                messageEl.textContent = "Time's up!";
            }
        }
    }, 1000);
}

function togglePause() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', togglePause);