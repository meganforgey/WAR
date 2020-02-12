/*----- global variables -----*/
let player1Cards = [];
let player2Cards = [];
let winner = null;
let currentPlayer1Card;
let currentPlayer2Card;

 const cards = {
    value : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    suit : ['hearts', 'diamonds', 'clubs', 'spades']
}
const deck = [];

let player1Score = document.getElementById("score-player-one")
let player2Score = document.getElementById("score-player-two")

/*----- cached elements-----*/
const displayCardOne = document.getElementById("player1-card-back")
const displayCardTwo = document.getElementById("player2-card-back")


/*----- event listeners -----*/
    const playBtn = document.querySelector(".play-button");
    const nextRound = document.querySelector(".round-button");
    playBtn.addEventListener('click', play);
    nextRound.addEventListener('click', playNextRound);

 /*----- functions -----*/
function makeDeck (cardData){
    for (let i = 0; i<cardData.suit.length; i++ ){
        for (let v = 0; v<cardData.value.length; v++){
            let newCard = {
                suit: cardData.suit[i],
                value: cardData.value[v],
            }
            deck.push(newCard)
        }
    }
}

function playNextRound(){
    removeBackCardClass();
    currentCards();
    whoWinsFinal();
}


function removeBackCardClass(){
    displayCardOne.classList.remove("back-red")
    displayCardTwo.classList.remove("back-red")
}


function deal() { 
    console.log(deck.length)
    for (let i =0; i<deck.length; i++){
        if (i % 2 === 0){
            player1Cards.push(deck[i])
        } else { 
            player2Cards.push(deck[i])
        }
    }
}


function shuffle(cardData) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }


function createCardClass(card) {
    const suit = card.suit[0];
    let name = ""
    if (card.value === 1){
        name = "A"
    } else if(card.value < 10){
        name = "0" + card.value;
    } else if(card.value === 11){
        name = "J"
    } else if(card.value === 12){
        name = "Q"
    } else if(card.value === 10){
        name = "10"
    } else if(card.value === 13){
        name = "K"
    }
    const cardClass = suit + name;
    return cardClass;
}


function currentCards() {
    currentPlayer1Card = player1Cards.shift()
    const cardClass1 = createCardClass(currentPlayer1Card)
    displayCardOne.classList = "card";
    displayCardOne.classList.add(cardClass1)
   currentPlayer2Card = player2Cards.shift()
    const cardClass2 = createCardClass(currentPlayer2Card)
        displayCardTwo.classList = "card";
         displayCardTwo.classList.add(cardClass2)
    whoWinsEachRound()
}


function whoWinsEachRound() {
    console.log(currentPlayer1Card)
    console.log(currentPlayer2Card)
    if (currentPlayer1Card.value === currentPlayer2Card.value){
        document.getElementById("p").textContent = "Shucks, Y'all Tied This Round :(";
         player1Cards.push(currentPlayer1Card)
         player2Cards.push(currentPlayer2Card)
         updateScore()
     } else if (currentPlayer1Card.value > currentPlayer2Card.value){
       document.getElementById("p").textContent = "Player One Won This Round!";
        player1Cards.push(currentPlayer2Card)
        player1Cards.push(currentPlayer1Card)
        updateScore()
     } else if (currentPlayer1Card.value < currentPlayer2Card.value){
         document.getElementById("p").textContent = "Player Two Won This Round!";
        player2Cards.push(currentPlayer1Card)
        player2Cards.push(currentPlayer2Card)
        updateScore()
     }
    }

    function updateScore() {
        player1Score.innerText = player1Cards.length;
        player2Score.innerText = player2Cards.length;
    }


function whoWinsFinal() {
    if (player1Cards.length === 0){
        document.getElementById("table").textContent = "Player 2 Won! The game will reload after 5 seconds";
        setTimeout(function () { location.reload(1); }, 5000);
    } else if (player2Cards.length === 0) {
        document.getElementById("table").textContent = "Player 1 Won! The game will reload after 5 seconds";
        setTimeout(function () { location.reload(1); }, 5000);  
    }
}


function play(player1Cards, player2Cards) {
    makeDeck(cards);
    shuffle();
    deal();
}
