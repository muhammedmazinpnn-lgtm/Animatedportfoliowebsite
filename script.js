// TYPING EFFECT
const text = ["Developer", "C++ Learner", "Tech Enthusiast"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentText.substring(0, j++);
    } else {
        document.getElementById("typing").innerHTML = currentText.substring(0, j--);
    }

    if (j == currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j == 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();


// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

function showOnScroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// GAME LOGIC
let score = 0;
let time = 10;
let gameActive = false;
let timerInterval;

function startGame() {
    score = 0;
    time = 10;
    gameActive = true;

    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = "Time: " + time;
    document.getElementById("result").innerText = "";

    timerInterval = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time;

        if (time <= 0) {
            clearInterval(timerInterval);
            gameActive = false;
            document.getElementById("result").innerText = "Game Over! Score: " + score;
        }
    }, 1000);
}

function increaseScore() {
    if (gameActive) {
        score++;
        document.getElementById("score").innerText = score;
    }
}