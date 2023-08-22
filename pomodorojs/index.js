let timer;
let isRunning = false;
let sessionDuration = 25 * 60;
let breakDuration = 5 * 60;
let timeLeft = sessionDuration;
let isBreak = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startPauseBtn').textContent = 'Start';
    } else {
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timer);
                
                // Update statistics based on session or break completion
                if (!isBreak) {
                    incrementSessionsCompleted();
                    alert('Session completed! Time for a break.');
                    toggleMode();
                } else {
                    incrementBreaksTaken();
                    alert('Break completed! Time to get back to work.');
                    toggleMode();
                }
            } else {
                updateDisplay();
            }
        }, 1000);
        document.getElementById('startPauseBtn').textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function incrementSessionsCompleted() {
    const sessions = parseInt(localStorage.getItem('completedSessions') || "0");
    localStorage.setItem('completedSessions', sessions + 1);
    document.getElementById('completedSessions').textContent = sessions + 1;
}

function incrementBreaksTaken() {
    const breaks = parseInt(localStorage.getItem('completedBreaks') || "0");
    localStorage.setItem('completedBreaks', breaks + 1);
    document.getElementById('completedBreaks').textContent = breaks + 1;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = isBreak ? breakDuration : sessionDuration;
    isRunning = false;
    document.getElementById('startPauseBtn').textContent = 'Start';
    updateDisplay();
}

function toggleMode() {
    isBreak = !isBreak;
    resetTimer();
    const modeBtn = document.getElementById('toggleModeBtn');
    modeBtn.textContent = isBreak ? 'Switch to Session' : 'Switch to Break';
}

function updateSessionLength() {
    const newDuration = parseInt(document.getElementById('sessionLength').value);
    sessionDuration = newDuration * 60;
    if (!isBreak) {
        resetTimer();
    }
}

// You can add similar function for breakDuration if needed.
// ... existing code ...

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
    loadStatistics();
    updateDisplay();  // Initialize the display
});

function loadPreferences() {
    const savedSessionLength = localStorage.getItem('sessionLength');
    const savedBreakLength = localStorage.getItem('breakLength');
    const savedTheme = localStorage.getItem('theme');

    if (savedSessionLength) {
        sessionDuration = parseInt(savedSessionLength) * 60;  // Parsing from string to integer
        document.getElementById('sessionLength').value = savedSessionLength;
        if (!isBreak) {
            updateDisplay();  // Update the display if it's a session
        }
    }
    
    if (savedBreakLength) {
        breakDuration = parseInt(savedBreakLength) * 60;  // Parsing from string to integer
        document.getElementById('breakLength').value = savedBreakLength;
        if (isBreak) {
            updateDisplay();  // Update the display if it's a break
        }
    }
    
    if (savedTheme) {
        changeTheme(savedTheme);
        document.getElementById('themeSelector').value = savedTheme;
    }
}

function loadStatistics() {
    const sessions = localStorage.getItem('completedSessions') || 0;
    const breaks = localStorage.getItem('completedBreaks') || 0;

    document.getElementById('completedSessions').textContent = sessions;
    document.getElementById('completedBreaks').textContent = breaks;
}

function updateSessionLength() {
    const newDuration = parseInt(document.getElementById('sessionSelector').value);
    sessionDuration = newDuration * 60;
    if (!isBreak) {
        resetTimer();
        updateDisplay();
    }
    localStorage.setItem('sessionLength', newDuration);
}

function updateBreakLength() {
    const newDuration = parseInt(document.getElementById('breakSelector').value);
    breakDuration = newDuration * 60;
    if (isBreak) {
        resetTimer();
        updateDisplay();
    }
    localStorage.setItem('breakLength', newDuration);
}

function toggleMode() {
    // If session is active, switch to break
    if (!isBreak) {
        isBreak = true;
        resetTimer();
        document.getElementById('toggleModeBtn').textContent = 'Switch to Session';
    } else {
        // If break is active, switch to session
        isBreak = false;
        resetTimer();
        document.getElementById('toggleModeBtn').textContent = 'Switch to Break';
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = isBreak ? breakDuration : sessionDuration;
    isRunning = false;
    document.getElementById('startPauseBtn').textContent = 'Start';
    updateDisplay();
    resetStatistics(); // Reset the productivity statistics.
}

function resetStatistics() {
    localStorage.setItem('completedSessions', '0');
    localStorage.setItem('completedBreaks', '0');
    loadStatistics();
}

// ... existing code ...


document.getElementById('breakLength').addEventListener('change', updateBreakLength);