


var player1= Math.floor(Math.random() * 6) + 1;
var randomDiceimage ="dice"+player1+".png";
var randomImageSource ="images/"+randomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var player2= Math.floor(Math.random() * 6) + 1;
var randomDiceimage ="dice"+player2+".png";
var randomImageSource ="images/"+randomDiceimage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
 
} else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (player1=player2){
    document.querySelector("h1").innerHTML = "Draw!";
}