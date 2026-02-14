const envelope = document.getElementById("envelope");
const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("bgMusic");
let isPlaying = false;

envelope.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");
        startHearts();
        if (!isPlaying) toggleMusic();
    } else if (!envelope.classList.contains("card-flipped")) {
        envelope.classList.add("card-flipped");
    } else {
        // Khi đóng lại, lật về mặt trước rồi mới hạ xuống
        envelope.classList.remove("card-flipped");
        setTimeout(() => {
            envelope.classList.remove("open");
        }, 600);
    }
});

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(e => console.log("Click để phát nhạc"));
    }
    isPlaying = !isPlaying;
}

musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMusic();
});

function startHearts() {
    setInterval(() => {
        if (envelope.classList.contains("open")) {
            createHeart();
        }
    }, 200); // Tim bay dày hơn cho không gian lớn
}

function createHeart() {
    const heart = document.createElement("span");
    const symbols = ["❤️", "💖", "💝", "💕", "✨"];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-5vh";
    heart.style.fontSize = (Math.random() * 30 + 20) + "px"; // Tim to hơn
    heart.style.animation = `float ${Math.random() * 3 + 3}s linear forwards`;

    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}