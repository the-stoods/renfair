// Set your launch date here (YYYY-MM-DDTHH:MM:SS)
const countdownDate = new Date("2025-09-06T18:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<p>🎉 It's time!</p>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

setInterval(updateCountdown, 1000);
updateCountdown();