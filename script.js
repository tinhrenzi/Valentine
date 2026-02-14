const envelope = document.getElementById("envelope");
const heartsContainer = document.querySelector(".hearts");

envelope.addEventListener("click", () => {
    // Trạng thái 1: Đang đóng -> Mở nắp và đẩy thư lên
    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");
        createHearts();
    }
    // Trạng thái 2: Đã mở nhưng chưa lật -> Lật lá thư để đọc
    else if (!envelope.classList.contains("card-flipped")) {
        envelope.classList.add("card-flipped");
    }
    // Trạng thái 3: Đang lật -> Lật lại, hạ thư xuống và đóng nắp
    else {
        envelope.classList.remove("card-flipped");

        setTimeout(() => {
            envelope.classList.remove("open");
        }, 400);
    }
});

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
}