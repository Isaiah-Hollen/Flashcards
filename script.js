let currentCard = 0;

function loadCard(index) {
    document.getElementById("card-front").textContent = flashcards[index].front;
    document.getElementById("card-back").textContent = flashcards[index].back;
    document.getElementById("flashcard").classList.remove("flipped");
    document.getElementById("backBtn").disabled = index === -1;
    document.getElementById("nextBtn").disabled = index === flashcards.length - 1;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    loadCard(currentCard);
}

function lastCard() {
    if (currentCard > 0) {
        currentCard--;
        loadCard(currentCard);
    }
}
document.addEventListener("keydown",
    function (event) {
        if (event.key === " ") {
            event.preventDefault();
            document.getElementById("flashcard").classList.toggle("flipped");
        }
    });
document.addEventListener("keydown",
    function (event) {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            currentCard = (currentCard + 1) % flashcards.length;
            loadCard(currentCard);
        }
    });
document.addEventListener("keydown",
    function (event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            if (currentCard > 0) {
                    currentCard--;
                    loadCard(currentCard);
            }
        }
    });
function flipCard() {
    document.getElementById("flashcard").classList.toggle("flipped");
}

loadCard(currentCard);