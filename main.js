var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User Flipped" + cardOne);
console.log("User Flipped" + cardTwo);
if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay[1]){
	alert("You Found A Match");
} else{
	alert("Sorry, Try Again");
}