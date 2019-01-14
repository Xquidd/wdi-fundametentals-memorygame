var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: 'images/queen-of-hearts.png'
},
{

	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = []
var checkForMatch = function () {
if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay[1]){
	alert("You Found A Match");
} else{
	alert("Sorry, Try Again");
}
}
var flipCard = function (cardID) {
	checkForMatch();
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}
flipCard(0);
flipCard(2);