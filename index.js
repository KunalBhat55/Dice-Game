
var randomNumber1;
var randomNumber2;


function diceRoller() {

  randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  console.log(randomNumber1);

  randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
  console.log(randomNumber2);

  var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  document.querySelector(".img1").setAttribute("src", "/images/" + randomDiceImage1);

  var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
  document.querySelector(".img2").setAttribute("src", "/images/" + randomDiceImage2)

}
function h1Changer(){

    if (randomNumber1 > randomNumber2) {

      document.querySelector("h1").innerHTML = "Player 1 Wins!";
      document.querySelector("body").style.backgroundColor = "beige";
    } 
    else if (randomNumber2 > randomNumber1) {

      document.querySelector("h1").innerHTML = "Player 2 Wins!";
      document.querySelector("body").style.backgroundColor = "skyblue";
    } 
    else {
        
      document.querySelector("h1").innerHTML = "Draw!";
    }

}

diceRoller();
h1Changer();