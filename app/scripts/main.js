
// constructor that makes dice objects
function Dice1 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
};

function Dice2 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
};

function Dice3 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
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
	



//defines function to compare dice
function rollCompare1 () {
	if (player1.score > computer1.score) {
		outcome1 = "VICTORY!";
	}
	else if (player1.score < computer1.score) {
		outcome1 = "FAILURE!";
	}
	else if (player1.score == computer1.score) {
		outcome1 = "ITS A TIE!";
	}
};

function rollCompare2 () {
	if (player2.score > computer2.score) {
		outcome2 = "VICTORY!";
	}
	else if (player2.score < computer2.score) {
		outcome2 = "FAILURE!";
	}
	else if (player2.score == computer2.score) {
		outcome2 = "ITS A TIE!";
	}
};

function rollCompare3 () {
	if (player3.score > computer3.score) {
		outcome3 = "VICTORY!";
	}
	else if (player3.score < computer3.score) {
		outcome3 = "FAILURE!";
	}
	else if (player3.score == computer3.score) {
		outcome3 = "ITS A TIE!";
	}
};


//calls dice comparison function
	rollCompare1();
	rollCompare2();
	rollCompare3();
//displays scores
$('.answer1').html('player score: ' + player1.score +'<br>computer score: ' + computer1.score + '<br> ' + outcome1);
$('.answer2').html('player score: ' + player2.score +'<br>computer score: ' + computer2.score + '<br> ' + outcome2);
$('.answer3').html('player score: ' + player3.score +'<br>computer score: ' + computer3.score + '<br> ' + outcome3);
//tells you who won

})

$('.submit').click(function() {
	$('.cub-1').addClass('active')
});


