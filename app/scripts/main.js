
// constructor that makes dice objects
function Dice (sides) {
	this.diceSides = sides;
	this.roll = function () {
		var result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();
	
};
//player dice
var player = new Dice(6);
// opponent dice
var computer = new Dice(6);
