$(document).ready(function() { 

var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var counter;
var wins = 0;
var loss = 0;
var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");


function startGame()
{
	


	targetNumber = Math.floor(Math.random() * 102) + 19;
	console.log(targetNumber);
	$("#targetNumber").text(targetNumber);

	crystal1 = Math.floor(Math.random()*12) +1;
	crystal2 = Math.floor(Math.random()*12) +1;
	crystal3 = Math.floor(Math.random()*12) +1;
	crystal4 = Math.floor(Math.random()*12) +1;


	counter = 0;
	$("#score").text(counter);
	
	imageCrystal1.addClass("crystal-image");
	imageCrystal1.attr("src", "assets/images/crystal1.jpg");
	imageCrystal1.attr("data-crystalvalue", crystal1);
	$(".crystals").append(imageCrystal1);

	
	imageCrystal2.addClass("crystal-image");
	imageCrystal2.attr("src", "assets/images/crystal2.jpg");
	imageCrystal2.attr("data-crystalvalue", crystal2);
	$(".crystals").append(imageCrystal2);

	
	imageCrystal3.addClass("crystal-image");
	imageCrystal3.attr("src", "assets/images/crystal3.jpg");
	imageCrystal3.attr("data-crystalvalue", crystal3);
	$(".crystals").append(imageCrystal3);

	
	imageCrystal4.addClass("crystal-image");
	imageCrystal4.attr("src", "assets/images/crystal4.jpg");
	imageCrystal4.attr("data-crystalvalue", crystal4);
	$(".crystals").append(imageCrystal4);
}


function resetGame()
{
	
	targetNumber = Math.floor(Math.random() * 102) + 19;
	console.log(targetNumber);
	$("#targetNumber").text(targetNumber);

	crystal1 = Math.floor(Math.random()*12) +1;
	crystal2 = Math.floor(Math.random()*12) +1;
	crystal3 = Math.floor(Math.random()*12) +1;
	crystal4 = Math.floor(Math.random()*12) +1;


	counter = 0;
	$("#score").text(counter);

	imageCrystal1.attr("data-crystalvalue", crystal1);
	$(".crystals").append(imageCrystal1);

	imageCrystal2.attr("data-crystalvalue", crystal2);
	$(".crystals").append(imageCrystal2);

	imageCrystal3.attr("data-crystalvalue", crystal3);
	$(".crystals").append(imageCrystal3);

	imageCrystal4.attr("data-crystalvalue", crystal4);
	$(".crystals").append(imageCrystal4);
}

startGame();


$(".crystal-image").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	$("#score").text(counter);
	console.log(counter);

	if(counter === targetNumber) {
		alert("you win!");
		wins++;
		$("#wins").text(wins);
		resetGame();
	}
	else if(counter > targetNumber){
		alert("you lose!");
		loss++;
		$("#loss").text(loss);
		resetGame();
	}
});
});



