/* =========================
   💗 FLOATING HEARTS (SAFE)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const hearts = document.querySelector(".hearts");

    function createHeart() {

        if (!hearts) return; // حماية مهمة

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
});


/* =========================
   🔒 PASSWORD CHECK
========================= */

function checkPassword() {

    const password = document.getElementById("password");
    const error = document.getElementById("error");

    if (!password) return;

    if (password.value === "love") {

        document.getElementById("login").style.display = "none";

        const loading = document.getElementById("loading");
        const main = document.getElementById("main");

        if (loading) loading.style.display = "flex";

        setTimeout(() => {

            if (loading) loading.style.display = "none";
            if (main) main.style.display = "block";

            try {
                startMusic();
                startMessages();
                startCounter();
            } catch (e) {
                console.log("Error:", e);
            }

        }, 3000);

    } else {
        if (error) error.innerHTML = "❌ الباسورد غلط";
    }
}


/* =========================
   🎵 MUSIC (SAFE)
========================= */

function startMusic() {

    const music = document.getElementById("music");

    if (!music) return;

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Autoplay blocked");
    });
}


/* =========================
   💌 MESSAGES (SAFE)
========================= */

function startMessages() {

    const sections = document.querySelectorAll(".message");

    if (!sections.length) return;

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
   ⏳ COUNTER (SAFE)
========================= */

function startCounter() {

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (!days || !hours || !minutes || !seconds) return;

    const startDate = new Date("2025-12-25T00:00:00");

    setInterval(() => {

        const now = new Date();

        const diff = now - startDate;

        const sec = Math.floor(diff / 1000);
        const min = Math.floor(sec / 60);
        const hr = Math.floor(min / 60);
        const day = Math.floor(hr / 24);

        days.innerText = day;
        hours.innerText = hr % 24;
        minutes.innerText = min % 60;
        seconds.innerText = sec % 60;

    }, 1000);
}


/* =========================
   🎁 FINAL GIFT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("giftBtn");
    const box = document.getElementById("giftBox");

    if (!btn || !box) return;

    btn.addEventListener("click", () => {

        box.style.display = "block";

        box.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});
