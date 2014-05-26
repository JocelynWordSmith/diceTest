// constructor that makes instance roll
function Dice (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1);
	};
	this.score = this.roll();	
};

var playerScore, computerScore;
//defines function to compare dice
function rollCompare () {

	//sets total scores to be compared
	playerScore = player1.score + player2.score + player3.score;
	computerScore = computer1.score + computer2.score + computer3.score;

	if (playerScore > computerScore) {
		outcome = "YOU WIN!";
		$('.wintext').html('Player Score: ' + playerScore + '<br>Computer Score: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
	else if (playerScore < computerScore) {
		outcome = "YOU LOSE!";
		$('.wintext').html('Player Score: ' + playerScore + '<br>Computer Score: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
	else if (playerScore == computerScore) {
		outcome = "ITS A TIE!";
		$('.wintext').html('Player Score: ' + playerScore + '<br>Computer Score: '+ computerScore + '<br>'  + outcome);
		winRecord();
	}
};

//variables for winRecord
var p = 0, c = 0; 
//record keeping for games won that displays # of games won to page
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

function animateDie () {
	//sets the class to make the die animate, waits until anim is done, removes class
		$('.cub-1').addClass('active');
		$('#tridiv').addClass('slide');

		setTimeout(function() {
			$('.cub-1').removeClass('active');
			$('#tridiv').removeClass('slide');
		},2000)
};

function showScores () {

	// Displays player roll
	setTimeout(function() {
	$('.player-roll1').html('First Dice Roll: ' + player1.score);
	$('.player-roll2').html('Second Dice Roll: ' + player2.score);
	$('.player-roll3').html('Third Dice Roll: ' + player3.score);
	},500);

	// Displays computer roll
	setTimeout(function() {
	$('.computer-roll1').html('First Dice Roll: ' + computer1.score);
	$('.computer-roll2').html('Second Dice Roll: ' + computer2.score);
	$('.computer-roll3').html('Third Dice Roll: ' + computer3.score);
	},1000);
};

//creates dice
$('.submit').click(function(){
	
	var sides = $('.dice-sides').val();

	if (sides < 2 || sides > 20) {
	// alert if number is greater than 20 or less than 2
	    alert('Please select a number between 2-20.');
  	} else if (isNaN(sides)) {
  		alert("Entry is not a number. Please select a number between 2-20");
  	} else {
	//else make a new player and computer
		player1 = new Dice(sides);
		player2 = new Dice(sides);
		player3 = new Dice(sides);
		
		computer1 = new Dice(sides);
		computer2 = new Dice(sides);
		computer3 = new Dice(sides);

	//calls the animate die function which rotates and translates the die at the screen bottom
	animateDie();

	//calls the score totals function, which adds and displays the scores
	showScores();	

	//calls dice comparison function == added timeout
	setTimeout(function() {
		rollCompare();
	},2000);				
	}
});

//on button press, reset will change all data feilds to empty
$('.reset').click(function() {
	$('.dice-sides').val('');
	$('.player-roll1').html('');
	$('.player-roll2').html('');
	$('.player-roll3').html('');
	$('.player-wins').html('');
	$('.computer-roll1').html('');
	$('.computer-roll2').html('');
	$('.computer-roll3').html('');
	$('.computer-wins').html('');
	$('.wintext').html('');
	$('.cub-1').removeClass('active');
	p = 0, 
	c = 0; 
});


