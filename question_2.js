// task 1
document.getElementById('startButton').addEventListener('click', startCountdown);

function startCountdown() {
    let duration = parseInt(document.getElementById('duration').value);
    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    timerDisplay.textContent = formatTime(duration);

    const intervalId = setInterval(() => {
        duration--;
        timerDisplay.textContent = formatTime(duration);

        if (duration <= 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = '00:00';
            alert('Time is up!');
        }
    }, 1000);
}

document.getElementById('showNotificationButton').addEventListener('click', showDelayedNotification);

// task 2
function showDelayedNotification() {
    let delay = parseInt(document.getElementById('delay').value);
    if (isNaN(delay) || delay <= 0) {
        alert('Please enter a valid positive number for delay.');
        return;
    }

    setTimeout(() => {
        alert('This is your delayed notification!');
    }, delay);
}

let repeatIntervalId;
document.getElementById('startRepeatButton').addEventListener('click', startRepeatedNotifications);
document.getElementById('stopRepeatButton').addEventListener('click', stopRepeatedNotifications);

// task 3
function startRepeatedNotifications() {
    const interval = parseInt(document.getElementById('interval').value);
    if (isNaN(interval) || interval <= 0) {
        alert('Please enter a valid positive number for interval.');
        return;
    }
    repeatIntervalId = setInterval(() => {
        alert('This is a repeated notification!');
    }, interval);
    document.getElementById('stopRepeatButton').style.display = 'inline-block';
    document.getElementById('startRepeatButton').disabled = true;
}

function stopRepeatedNotifications() {
    if (repeatIntervalId) {
        clearInterval(repeatIntervalId);
        alert('Repeated notifications have been stopped.');
    }
    document.getElementById('stopRepeatButton').style.display = 'none';
    document.getElementById('startRepeatButton').disabled = false;
}
