// /*----- global variables -----*/
let player1Cards = [];
let player2Cards = [];
let winner = null;
let currentPlayer1Card;
let currentPlayer2Card;

// const playerDefinition = {
//     '1' : 'Player One',
//     '-1' : 'Player Two',
// };

 const cards = {
    value : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    suit : ["hearts", 'diamonds', 'clubs', 'spades']
}
const deck = [];

/*----- cached elements-----*/
const displayCardOne = document.getElementById("player1-card-back")
const displayCardTwo = document.getElementById("player2-card-back")


/*----- event listeners -----*/
    const playBtn = document.querySelector(".play-button");
    const nextRound = document.querySelector(".round-button");
    playBtn.addEventListener('click', play);
    nextRound.addEventListener('click', playTwo);


 /*----- functions -----*/
//function that takes a value and a suit and constructs a card from it
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

//need to rename this
function playTwo(){
    removeBackCardClass();
    currentCards();
    whoWinsFinal();
}

function removeBackCardClass(){
    displayCardOne.classList.remove("back-red")
    displayCardTwo.classList.remove("back-red")
}

function deal(){ console.log(deck.length)
    for (let i =0; i<deck.length; i++){
        if (i % 2 === 0){
            player1Cards.push(deck[i])
        } else { 
            player2Cards.push(deck[i])
        }
    }
}
//shuffle the deck and put those values into player1 and player2 arrays
function shuffle(cardData) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

function createCardClass(card) {
    console.log(card);
    const suit = card.suit[0];
    
    console.log(suit)
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
    console.log(suit + name)
    const cardClass = suit + name;
    return cardClass;
}

function currentCards(){
    currentPlayer1Card = player1Cards.shift()
    const cardClass1 = createCardClass(currentPlayer1Card)
    //reset the classlist to blank card
    displayCardOne.classList("back-red")

   displayCardOne.classList.add(cardClass1)

   currentPlayer2Card = player2Cards.shift()
    const cardClass2 = createCardClass(currentPlayer2Card)
        //reset the classlist to blank card
    displayCardTwo.classList.add(cardClass2)
    whoWinsEachRound()
}

function whoWinsEachRound(){
    console.log(currentPlayer1Card)
    console.log(currentPlayer2Card)
    if (currentPlayer1Card.value === currentPlayer2Card.value){
        document.getElementById("p").textContent = "Shucks, Y'all Tied This Round :(";
         player1Cards.push(currentPlayer1Card)
         player2Cards.push(currentPlayer2Card)
     } else if (currentPlayer1Card.value > currentPlayer2Card.value){
       document.getElementById("p").textContent = "Player One Won This Round!";
        player1Cards.push(currentPlayer2Card)
        player1Cards.push(currentPlayer1Card)
     } else if (currentPlayer1Card.value < currentPlayer2Card.value){
         document.getElementById("p").textContent = "Player Two Won This Round!";
        player2Cards.push(currentPlayer1Card)
        player2Cards.push(currentPlayer2Card)
     }
    }

function whoWinsFinal(){
    if (player1Cards.length === 0){
        alert("Player 2 Won! Clicking OK will reload the game.")
        location.reload()
    } else if (player2Cards.length === 0) {
        alert("Player 1 Won!, Clicking OK will reload the game.")
        location.reload()
    }
}

function play(player1Cards, player2Cards) {
    makeDeck(cards);
    shuffle();
    deal();
}
