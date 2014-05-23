//creates dice
$('.submit').click(function(){
	var sides = $('.dice-sides').val();
//makes new player and computer dice and scores
	player = new Dice(sides);
	console.log(player)
	computer = new Dice(sides);
	console.log(computer)
//calls dice comparison function
	rollCompare(player, computer);
//displays scores
// $('.answer').html('player score: ' + player.score +'<br>computer score: ' + computer.score + '<br> ' + outcome);
//tells you who won
})


// constructor that makes dice objects
function Dice (sides) {
	this.diceSides = sides;
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		//console.log(result)
	};
	this.score = this.roll();
};

//defines function to compare dice
function rollCompare (player, computer) {
	if (player.score > computer.score) {
		console.log('vctory');
	}
	else if (player.score < computer.score) {
		console.log('failure');
	}
	else if (player.score == computer.score) {
		console.log('tie');
	}
};
