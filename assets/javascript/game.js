$(document).ready(function() { 

var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var counter;
var wins = 0;
var loss = 0;
// var numberOptions = [];


function startGame()
{
	
// $(".crystal-image").remove();

	targetNumber = Math.floor(Math.random() * 121) + 19;
	console.log(targetNumber);
	$("#targetNumber").text(targetNumber);

	crystal1 = Math.floor(Math.random()*12) +1;
	crystal2 = Math.floor(Math.random()*12) +1;
	crystal3 = Math.floor(Math.random()*12) +1;
	crystal4 = Math.floor(Math.random()*12) +1;

	// numberOptions = [];
	// numberOptions = [crystal1, crystal2, crystal3, crystal4];

	// counter = 0;

	// for (var i=0; i < numberOptions.length; i++){

	// 	var imageCrystal = $("<img>");
	// 	imageCrystal.addClass("crystal-image");
	// 	imageCrystal.attr("src", "assets/images/crystal1.jpg");
	// 	imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	// 	$("#crystals").append(imageCrystal);
	// }




	// crystal1 = parseInt(crystal1);

	counter = 0;
	$("#score").text(counter);
	// $(".crystals").empty();
	var imageCrystal1 = $("<img>");
	imageCrystal1.addClass("crystal-image");
	imageCrystal1.attr("src", "assets/images/crystal1.jpg");
	imageCrystal1.attr("data-crystalvalue", crystal1);
	// imageCrystal1.attr("height", "200px");
	$(".crystals").append(imageCrystal1);

	var imageCrystal2 = $("<img>");
	imageCrystal2.addClass("crystal-image");
	imageCrystal2.attr("src", "assets/images/crystal2.jpg");
	imageCrystal2.attr("data-crystalvalue", crystal2);
	// imageCrystal2.attr("height", "200px");
	$(".crystals").append(imageCrystal2);

	var imageCrystal3 = $("<img>");
	imageCrystal3.addClass("crystal-image");
	imageCrystal3.attr("src", "assets/images/crystal3.jpg");
	imageCrystal3.attr("data-crystalvalue", crystal3);
	// imageCrystal3.attr("height", "200px");
	$(".crystals").append(imageCrystal3);

	var imageCrystal4 = $("<img>");
	imageCrystal4.addClass("crystal-image");
	imageCrystal4.attr("src", "assets/images/crystal4.jpg");
	imageCrystal4.attr("data-crystalvalue", crystal4);
	// imageCrystal4.attr("height", "200px");
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
		// $(".crystal-image").remove();
		startGame();
	}
	else if(counter > targetNumber){
		alert("you lose!");
		loss++;
		$("#loss").text(loss);
		$(".crystal-image").remove();
		startGame();
	}

});
});



