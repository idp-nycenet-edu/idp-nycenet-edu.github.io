// timer.js

document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("timer");
  const otpContainer = document.getElementById("ci-time-not-expired-container");
  const expiredContainer = document.getElementById("ci-time-expired-container");

  let timeLeft = 5 * 60; // 5 minutes in seconds

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent =
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function countdown() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      otpContainer.style.display = "none";
      expiredContainer.style.display = "block";
    } else {
      timeLeft--;
      updateTimer();
    }
  }

  updateTimer(); // initial display
  const timerInterval = setInterval(countdown, 1000);
});

