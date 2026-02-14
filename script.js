const card = document.getElementById("card");
const heartsContainer = document.querySelector(".hearts");

card.addEventListener("click", () => {
    card.classList.toggle("open");

    if(card.classList.contains("open")){
        createHearts();
    }
});

function createHearts(){
    for(let i = 0; i < 15; i++){
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },7000);
    }
}
