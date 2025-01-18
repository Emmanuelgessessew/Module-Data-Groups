function setAlarm() {
  let alarmInput = document.getElementById("alarmSet").value.trim(); // Remove leading/trailing spaces
  let timeRemaining = Number(alarmInput);

  // Validate input: must be a positive integer greater than 0
  if (!Number.isInteger(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid positive integer!");
    return;
  }

  updateDisplay(timeRemaining);

  let timer = setInterval(function () {
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      playAlarm();
    }

    updateDisplay(timeRemaining);
  }, 1000);

  function updateDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("timeRemaining").textContent =
      "Time Remaining: " + minutes + ":" + seconds;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
