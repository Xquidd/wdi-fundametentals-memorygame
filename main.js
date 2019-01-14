var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay[1]){
	alert("You Found A Match");
} else{
	alert("Sorry, Try Again");
}
}
var flipCard = function (cardID) {
	checkForMatch();
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cardID);
}
flipCard(0);
flipCard(2);