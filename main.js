// /*----- global variables -----*/
let player1Cards = [];
let player2Cards = [];
let winner = null;
let currentPlayer1Card;
let currentPlayer2Card;

const playerDefinition = {
    '1' : 'Player One',
    '-1' : 'Player Two',
};

 const cards = {
    value : [1, 2], //3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    suit : ["hearts"], //'diamonds', 'clubs', 'spades']
}

const deck = [];

/*----- event listeners -----*/
    const playBtn = document.querySelector(".play-button");
    const nextRound = document.querySelector(".round-button");
    playBtn.addEventListener('click', play);
    nextRound.addEventListener('click', playTwo);
   


//function that takes a value and a suit and constructs a card from it
function makeDeck (cardData){
    for (let i = 0; i<cardData.suit.length; i++ ){
        for (let v = 0; v<cardData.value.length; v++){
            let newCard = {
                suit: cardData.suit[i],
                value: cardData.value[v]
            }
            deck.push(newCard)
        }
    }
}
//console.log(deck)

function playTwo(){
    findCurrent1Card();
    findCurrent2Card();
    whoWinsEachRound();
    whoWinsFinal();
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
//    shuffle(deck);
//     console.log(deck);


// console.log(deck[0].value<deck[1].value)



// /*----- functions -----*/


//  eachRound function need to select the first indexed element from both arrays and compare it to that same index
//from player2's array, go through that process 26 times, so that index 1 of player 1 and player 2 are always
//compared with each other, if tie, just move on to next index
//display on screen 
//Else if: player 2's card > player 1's card Push player 1's card into player 2's array of 

function findCurrent1Card(){
    currentPlayer1Card = player1Cards.shift()
    //console.log(currentPlayer1Card);
    return currentPlayer1Card;
}

function findCurrent2Card(){
    currentPlayer2Card = player2Cards.shift()
    //console.log(currentPlayer2Card);
    return currentPlayer2Card;
}

function whoWinsEachRound(){
    console.log(currentPlayer1Card)
    if (currentPlayer1Card.value === currentPlayer2Card.value){
         alert("you tied");
         player1Cards.push(currentPlayer1Card)
         player2Cards.push(currentPlayer2Card)
     } else if (currentPlayer1Card.value > currentPlayer2Card.value){
         alert("Player One Won This Round");
        player1Cards.push(currentPlayer2Card)
        player1Cards.push(currentPlayer1Card)
     } else if (currentPlayer1Card.value < currentPlayer2Card.value){
         alert("Player Two Won This Round");
        player2Cards.push(currentPlayer1Card)
        player2Cards.push(currentPlayer2Card)
        
     } 
     console.log(currentPlayer1Card);
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
