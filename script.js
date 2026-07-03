const typing = document.getElementById("typing");

const text =
"To the most special person in my life ❤️";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

window.onload = () => {
    typeWriter();
};

const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });

    music.play();

    startConfetti();

    floatingHearts();

});

function startConfetti() {

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: {
                x: 1
            }
        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}

function floatingHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.opacity = "0.8";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 6s linear, opacity 6s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-110vh)";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);

}
