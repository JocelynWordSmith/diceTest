 // global describe, it */

'use strict';

/*
(function () {

	describe('If it works, assign that number to player.diceSides', function () {
		it('should set player.dice if input valid', function () {
			// this is a function. values passed should be >=2 and <20 
			var testInput = 10;

			// passing value to the function
			inputValue(testInput);

			// assign that number to player.diceSides
			expect(player.diceSides).to.equal(testInput);
		});
	});
})();

(function () {

	describe('Function that picks random number for dice roll', function () {
		it('should assign that number to player.diceRoll', function () {
			// dice roll is a function picking random number
			var roll = playerRoll();

			// check If number
			if (typeof(roll) !== 'number') {
				throw new Error("Roll is not a number.");
			}

			// check If number chosen is within the range of 1 and player.diceSides
			expect(roll).to.be.within(1, player.diceSides);

			// If roll is successful, assigns that number to player.diceRoll
			player.diceRoll = roll;
		});
	});
})();

(function () {

	describe('Function that delays opponent turn then makes a dice', function () {
		it('should set opponent.diceSides = player.diceSides', function () {

			expect(opponent.diceSides).to.be.equal(player.diceSides);
		});
	});
})();

(function () {
    describe('input valid', function () {
        describe('input valid type: number', function () {
            it('should give alert if NaN', function () {
              var answer = inputValid(NaN);
              expect(answer).to.equal(alert('not a number, select a number 2-20'));
            });
        });
    });
})();

(function () {
    describe('input valid', function () {
        describe('test if input is not number between 2 and 20', function () {
            it('should give alert if less than 2 OR larger than 20', function () {
              var answerUnder = inputValid(-5);
              var answerOver  = inputValid(30);

              expect(answerUnder).to.equal(alert('select number between 2-20'));
              expect(answerOver).to.equal(alert('select number between 2-20'));
            });
        });
    });
})();

(function () {
    describe('input valid', function () {
        describe('test if input is between two and 20', function () {
            it('should set player.roll to input', function () {
              var answer = inputValid(5);
              expect(answer).to.equal(player.dice);
            });
        });
    });
})();	
*/


(function () {
    describe('rollCompare function', function () {
        describe('should return the winner of the roll', function () {
            it('as player if player.score is greater than computer.score', function () {

              $('.submit').click(function(){

              });

              player.score = 3;  
              computer.score = 4;

              expect(player.score).to.be.above(computer.score);
            });
        });
    });
})();	

/*(function () {
    describe('Endgame Result', function () {
        describe('test that when computer.score is winner failure message shows', function () {
            it('should show failure screen if player.score is greater than computer.score', function () {
              var answer = rollCompare(player.score < computer.score);
              expect(answer).to.equal(document.write('FAILURE!'));
            });
        });
    });
})();

(function () {
    describe('Endgame Result', function () {
        describe('test that when player.score is equal to computer.score draw message is shown', function () {
            it('should show tie screen if player.score == computer.score', function () {
              var answer = rollCompare(player.score == computer.score);
              expect(answer).to.equal(document.write('ITS A TIE!'));
            });
        });
    });
})();


(function () {
    describe('Endgame Result', function () {
        describe('test that function is passed a string', function () {
            it('should show victory screen if player.score is greater than computer.score', function () {
              var answerS = rollCompare('Draw');
              var answerA = rollCompare([1,3,4]);
              var answerO = rollCompare(player);
              var answerN = rollCompare(7);
              var answerNaN = rollCompare(NaN);
              var answerU = rollCompare(player.somethingrandom);



              expect(answerS).to.equal(gameRestart('Draw'));
              expect(answerA).to.equal(alert('endgame was passed an array'));
              expect(answerO).to.equal(alert('endgame was passed an object'));
              expect(answerN).to.equal(alert('endgame was passed a number'));
              expect(answerNaN).to.equal(alert('endgame was passed a NaN'));
              expect(answerU).to.equal(alert('endgame was passed undefined'));
            });
        });
    });
})();

(function () {	

    describe('opponent roll', function () {
        describe('opponent roll is number', function () {
            it('should choose a number for opponent', function () {
              var answer = opponentRoll();
              Math.floor(Math.random() * opponent.diceSides + 1)
              expect(answer).to.be.within(1, player.diceSides);
            });
        });
    });
})();


(function () {
	describe('opponent roll', function () {
		describe('opponent dice size', function() {
			it('should choose number of dice sides for opponent', function() {
				var opponentDice = opponent.diceSides(number);
				expect(opponentDice).to.be.within(1, opponent.diceSides)
			});
		});
	});
})();


(function () {
	describe('opponent roll', function() {
		it('should assign opponent.diceSides to .diceRoll', function() {
			var opponentRoll = (opponent.diceSides = opponent.diceRoll);
			expect(opponentRoll).to.equal(opponent.diceRoll); 
		});
	});
})();



*/