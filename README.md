# WAR
Project 1

##Wireframe
https://www.figma.com/file/xEOarnsGlOitzdXjdmpTAo/War?node-id=0%3A1

# General
War is a two-player game. 
Create an array of allCardsAvailable with 52 cards, making their name a number that denotes their value. For example 
All 2's would be 2, and all queens would be 12.
Create two empty arrays of player 1 and player 2's collection of cards.
When page, loads, show score at 26. When one player clicks, let's play, the game begins and two cards are "flipped over" and shown on screen, replacing the image of the back of the card.
The program determines who won that round, and adds 1 into the winner's score, and removes 1 from the loser's score. To start another round, a player clicks the Let's Play button again. The game ends when one player has 52 cards, and an alert shows the winner. After 10 seconds, the page reloads, restarting the game. 

##Order of Functions to run
	1. Show back of card
	2. Set playerCards
    3. Event listeners => play => showFrontOfCard => whoWinsEachRound => flipcardBack => whoWinsFinal

### Functions Needed
showFrontOfCard 
Take in arguments of player 1 and player 2's random card from their array
Put that value's linked div from HTML and display on screen

showBackOfCard 
Doesn't take in any arguments
Just manipulates HTML to replace the card container to show the back of the card

whoWinsFinal
Take in current score and using innerText- use this to append the score onscreen
Takes in two arguments - both players number of cards
Check if either player has 52 cards
	If true: alert(`player ${winningPlayer} won!`)
	Reload screen after 10 seconds
	
whoWinsEachRound
Take in each player's card displayed on screen
	If player 1's card > player 2's card
		Push player 2's card into player 1's array of available cards
		And remove that card from player 2's array of available cards
	Else if: player 2's card > player 1's card
		Push player 1's card into player 2's array of available cards
		And remove that card from player 1s array
	Else if: player 1's card === player 2's card
		Alert(you tied!)
			Call showBackofCard

setPlayersCard 
Take in one argument- allCards array
Using math.random, get 26 random indexes- put them in indexArray.for each
	Get allCards individual index and put them in player 1's array
	Using forEach[j], for indexes 0-51, if the index is not in player 1's array, add these to player 2's array.
	

Play Function
Takes in two arguments- each player's array of cards
For each array, pick a random card from it
Call showFrontOfCard function passing these two variables (random cards) as arguments
Call whoWinsEachRound function, passing these two variables (random cards) as arguments
Call whoWinsFinal function, adding in the players cards array.length
	
	
eventListener
Add event listener to listen if the let's play button has been click
Call play function

War is a two-player game. 
Create an array of allCardsAvailable with 52 cards, making their name a number that denotes their value. For example 
All 2's would be 2, and all queens would be 12.
Create two empty arrays of player 1 and player 2's collection of cards.
When page, loads, show score at 26. When one player clicks, let's play, the game begins and two cards are "flipped over" and shown on screen, replacing the image of the back of the card.
The program determines who won that round, and adds 1 into the winner's score, and removes 1 from the loser's score. To start another round, a player clicks the Let's Play button again. The game ends when one player has 52 cards, and an alert shows the winner. After 10 seconds, the page reloads, restarting the game. 
