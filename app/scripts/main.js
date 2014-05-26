

// constructor that makes first instance roll

function Dice (sides) {
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

};
	
//adds or removes class to make dice roll

$('.submit').click(function() {
	var sides = $('.dice-sides').val();

//makes new player and computer dice and scores
	if (sides < 2 || sides > 20) {
	// alert if number is greater than 20 or less than 2
	    var err = new ReferenceError('Please select a number between 2-20.')
  		// alert("Please select a number between 2-20.");
  	} else if (isNaN(sides)) {
  	// alert if number is greater than 20 or less than 2
  		alert("Entry is not a number. Please select a number between 2-20");
  	} else {
	
	//else make a new player and computer
		player1 = new Dice(sides);
		computer1 = new Dice(sides);
		
		player2 = new Dice(sides);
		computer2 = new Dice(sides);

		player3 = new Dice(sides);
		computer3 = new Dice(sides);

	// created an if else statement to prevent die from spinning during an alert message.
	// NEED to add something to make have class when inbetween rolls.
		if ($('.cub-1').hasClass('active')) {
			$('.cub-1').removeClass('active');
		} else {
			$('.cub-1').addClass('active');
		}
	}
		var playerScore = player1.score + player2.score + player3.score;
		var computerScore = computer1.score + computer2.score + computer3.score;

	//calls dice comparison function == added timeout
		setTimeout(function(){
		  rollCompare(playerScore, computerScore);
		},1000);
		

	// Displays player roll

		$('.player-roll1').html('player score: ' + player1.score);
		$('.player-roll2').html('player score: ' + player2.score);
		$('.player-roll3').html('player score: ' + player3.score);

	// Displays computer roll
		$('.computer-roll1').html('computer score: ' + computer1.score);
		$('.computer-roll2').html('computer score: ' + computer2.score);
		$('.computer-roll3').html('computer score: ' + computer3.score);


//calls dice comparison function == added timeout

		setTimeout(function() {
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

});


$('.reset').click(function() {
	$('.dice-sides').val('');
	$('.player-roll1').html('');
	$('.player-roll2').html('');
	$('.player-roll3').html('');
	$('.computer-roll1').html('');
	$('.computer-roll2').html('');
	$('.computer-roll3').html('');
	$('.winner').html('');
	$('.cub-1').removeClass('active');
});
