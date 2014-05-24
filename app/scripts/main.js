
// constructor that makes first instance roll
function Dice1 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
	};
	this.score = this.roll();	
};

// constructor that makes second instance roll
function Dice2 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
	};
	this.score = this.roll();	
};

// constructor that makes third instance roll
function Dice3 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
	};
	this.score = this.roll();	
};

//defines function to compare dice

function rollCompare () {

	if (playerScore > computerScore) {
		outcome = "VICTORY!";
	}
	else if (playerScore < computerScore) {
		outcome = "FAILURE!";
	}
	else if (playerScore == computerScore) {
		outcome = "ITS A TIE!";
	}
};



//creates dice
$('.submit').click(function(){
	var sides = $('.dice-sides').val();
//makes new player and computer dice and scores
	player1 = new Dice1(sides);
	computer1 = new Dice1(sides);
	
	player2 = new Dice2(sides);
	computer2 = new Dice2(sides);

	player3 = new Dice3(sides);
	computer3 = new Dice3(sides);


//calls dice comparison function
	rollCompare();


// Displays player roll
	$('.player-roll1').html('player score: ' + player1.score);
	$('.player-roll2').html('player score: ' + player2.score);
	$('.player-roll3').html('player score: ' + player3.score);

// Displays computer roll
	$('.computer-roll1').html('computer score: ' + computer1.score);
	$('.computer-roll2').html('computer score: ' + computer2.score);
	$('.computer-roll3').html('computer score: ' + computer3.score);

})
