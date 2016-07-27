$(document).ready(function() {


var win = 0;
var loss = 0;
var myScore = 0; 
var blue = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var randomNumber =  Math.floor(Math.random() * 120) + 19;



$("#gamenumber").html(randomNumber);

$("#redcrystal").on('click', function() {
	allCrystal(red);
});

$("#bluecrystal").on('click', function() {
	allCrystal(blue);
});

$("#greencrystal").on('click', function() {
	allCrystal(green);
});

$("#yellowcrystal").on('click', function() {
	allCrystal(yellow);
});


function allCrystal (colors) {

	 	myScore += colors; 

	 		$("#totalpointbox").empty();

			$("#totalpointbox").append(myScore);

	 			if (myScore > randomNumber) {

	 				loss++;

	 				$("#losses").html(loss);

	 				alert("GOTTA CATCH'EM ALL BETTER");

	 				reset();
	 			}

	 			else if (myScore == randomNumber) {

	 				win++;

	 				$("#wins").html(win);

	 				alert("YOU'RE A POKEMON MASTER");

	 				reset();
	 			}

	 }


function reset () {

	randomNumber = Math.floor(Math.random() * 120) + 19;

	blue = Math.floor(Math.random() * 12) + 1;

	red = Math.floor(Math.random() * 12) + 1;

	yellow = Math.floor(Math.random() * 12) + 1;

	green = Math.floor(Math.random() * 12) + 1;

	$("#gamenumber").html(randomNumber);

	myScore = 0;
	$("#totalpointbox").html(myScore);		


	}

});


















