let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    credits: "Credits",
    chips: 100
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.credits + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    if (player.chips > 0) {
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    } else {
        message = "You've got no credits left...";
        renderMessage();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        player.chips += 50;
        updatePlayerCredits();
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        player.chips -= 10;
        updatePlayerCredits();
    }
    renderMessage();
}

function renderMessage() {
    messageEl.textContent = message;
}

function updatePlayerCredits() {
    if (player.chips >= 0) {
        playerEl.textContent = player.credits + ": $" + player.chips;
    } else {
        playerEl.textContent = player.credits + ": -$" + Math.abs(player.chips);
    }
}

function newCard() {
    if (isAlive && !hasBlackJack && player.chips > 0) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
