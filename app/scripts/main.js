//variables for wins tracker
var p = 0, c = 0; 

// constructor that makes instance roll

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
		outcome = "YOU WIN!";
		$('.wintext').html('Player total: ' + playerScore + '<br>Computer total: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
	else if (playerScore < computerScore) {
		outcome = "YOU LOSE!";
		$('.wintext').html('Player total: ' + playerScore + '<br>Computer total: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
	else if (playerScore == computerScore) {
		outcome = "ITS A TIE!";
		$('.wintext').html('Player total: ' + playerScore + '<br>Computer total: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
};

//record keeping for games won
function winRecord () {
	if(outcome == 'YOU WIN!'){
		p += 1;
	}
	else if(outcome == 'YOU LOSE!'){
		c += 1;
	}
	else if(outcome == 'ITS A TIE!'){
		p += 1;
		c += 1;
	}

	$('.player-wins').html('wins: ' + p);
	$('.computer-wins').html('wins: ' + c)


}


//creates dice
$('.submit').click(function(){
	
	var sides = $('.dice-sides').val();

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
	
	//sets the class to make the die animate, waits until anim is done, removes class
		$('.cub-1').addClass('active');
		$('#tridiv').addClass('slide');

		setTimeout(function() {
			$('.cub-1').removeClass('active');
			$('#tridiv').removeClass('slide');
		},2000)
		

		var playerScore = player1.score + player2.score + player3.score;
		var computerScore = computer1.score + computer2.score + computer3.score;

//calls dice comparison function == added timeout

		setTimeout(function() {
		  rollCompare(playerScore, computerScore);
		},2000);
		

	// Displays player roll

		$('.player-roll1').html('player score: ' + player1.score);
		$('.player-roll2').html('player score: ' + player2.score);
		$('.player-roll3').html('player score: ' + player3.score);

	// Displays computer roll

		$('.computer-roll1').html('computer score: ' + computer1.score);
		$('.computer-roll2').html('computer score: ' + computer2.score);
		$('.computer-roll3').html('computer score: ' + computer3.score);

		
	}
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
