/* =========================
   💗 FLOATING HEARTS
========================= */

const hearts = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 250);


/* =========================
   🔒 PASSWORD CHECK
========================= */

function checkPassword() {

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "love") {

        document.getElementById("login").style.display = "none";

        document.getElementById("loading").style.display = "flex";

        setTimeout(() => {

            document.getElementById("main").style.display = "block";
           
            document.getElementById("loading").style.display = "none";

            startMusic();
            startMessages();
            startCounter();

        }, 3000);

    } else {
        error.innerHTML = "❌ الباسورد غلط";
    }
}


/* =========================
   🎵 MUSIC
========================= */

function startMusic() {

    const music = document.getElementById("music");

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

}


/* =========================
   💌 SHOW MESSAGES ONE BY ONE
========================= */

function startMessages() {

    const sections = document.querySelectorAll(".message");

    sections.forEach((section, index) => {

        section.style.opacity = "0";

        setTimeout(() => {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "1.5s ease";

            section.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, index * 4000);

    });
}


/* =========================
   ⏳ ANNIVERSARY COUNTER
   from 25/12/2025
========================= */

function startCounter() {

    const startDate = new Date("2025-12-25T00:00:00");

    setInterval(() => {

        const now = new Date();

        const diff = now - startDate;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours % 24;
        document.getElementById("minutes").innerText = minutes % 60;
        document.getElementById("seconds").innerText = seconds % 60;

    }, 1000);

}


/* =========================
   🎁 FINAL GIFT (QR SHOW)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("giftBtn");
    const box = document.getElementById("giftBox");

    btn.addEventListener("click", () => {

        box.style.display = "block";
        box.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});
