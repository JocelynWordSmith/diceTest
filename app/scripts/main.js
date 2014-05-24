
// constructor that makes first instance roll
// constructor that makes dice objects

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

function rollCompare (playerScore, computerScore) {

	if (playerScore > computerScore) {
		outcome = "VICTORY!";
		$('.winner').html('player score: '+ playerScore + '<br>'  + outcome);
	}
	else if (playerScore < computerScore) {
		outcome = "FAILURE!";
		$('.winner').html('player score: ' + playerScore + '<br>'  + outcome);
	}
	else if (playerScore == computerScore) {
		outcome = "ITS A TIE!";
		$('.winner').html('player score: ' + playerScore + '<br>' + outcome);
	}
	

$('.submit').click(function() {
	if ($('.cub-1').hasClass('active')) {
		$('.cub-1').removeClass('active');
	} else {
		$('.cub-1').addClass('active');
	}
});

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

	var playerScore = player1.score + player2.score + player3.score;
	var computerScore = computer1.score + computer2.score + computer3.score;

//calls dice comparison function == added timeout
	setTimeout(function(){
	  rollCompare(playerScore, computerScore);
	},400);
	

// Displays player roll

	$('.player-roll1').html('player score: ' + player1.score);
	$('.player-roll2').html('player score: ' + player2.score);
	$('.player-roll3').html('player score: ' + player3.score);

// Displays computer roll
	$('.computer-roll1').html('computer score: ' + computer1.score);
	$('.computer-roll2').html('computer score: ' + computer2.score);
	$('.computer-roll3').html('computer score: ' + computer3.score);

})
