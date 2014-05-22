/* global describe, it */
'use strict';

<<<<<<< HEAD
(function () {	

    describe('opponent roll', function () {
        describe('opponent roll is number', function () {
            it('should choose a number for opponent', function () {
              var answer = opponentRoll();
              Math.floor(Math.random() * opponent.diceSides + 1)
              expect(answer).to.be.within(1, player.diceSides);
=======
(function () {

	'use strict';

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


    describe('input valid', function () {
        describe('input valid type: number', function () {
            it('should give alert if NaN', function () {
              var answer = inputValid(NaN);
              expect(answer).to.equal(alert('not a number, select a number 2-20'));
>>>>>>> c5a3081f8c4643f24b2c9bf09866ac19332bdcaa
            });
        });
    });
})();

<<<<<<< HEAD

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


(function () {
	describe('compare', function() {
		it('should compare the value of player and opponent to see if equal', function() {
			var compare = (player.diceRoll == opponent.diceRoll);
			expect(compare).to.equal('tie');
		});
	});
})();



(function () {
	describe('compare', function() {
		it('should compare the value of player and opponent to see if player is greater', function() {
			var compare = (6, 4);
			expect(compare).to.equal('Win!');
		});
	});
})();


(function () {
	describe('compare', function() {
		it('should compare the value of player and opponent to see if opponent is greater', function() {
			var compare = (4, 6);
			expect(compare).to.equal('Lose!');
		});
	});
})();


(function () {
	describe('winner', function() {
		it('should pull winner from compare and return the winner', function() {
			var winner = (player.diceRoll > opponent.diceRoll);
			expect(winner).to.equal(player); 
		});
	});
})();


(function () {
	describe('winner', function() {
		it('should pull winner from compare and return the winner', function() {
			var winner = (player.diceRoll < opponent.diceRoll);
			expect(winner).to.equal(opponent); 
		});
	});
})();
=======
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

(function () {
    describe('Endgame Result', function () {
        describe('test that when player.diceRoll is winner victory message shows', function () {
            it('should show victory screen if player.diceRoll is greater than opponent.diceRoll', function () {
              var answer = endgameResult('Victory');
              expect(answer).to.equal(document.write('Victory is yours!'));
            });
        });
    });
})();	

(function () {
    describe('Endgame Result', function () {
        describe('test that when opponent.diceRoll is winner failure message shows', function () {
            it('should show victory screen if player.diceRoll is greater than opponent.diceRoll', function () {
              var answer = endgameResult('Failure');
              expect(answer).to.equal(document.write('The Computer has won. You lose'));
            });
        });
    });
})();

(function () {
    describe('Endgame Result', function () {
        describe('test that when player.diceRoll is equal to opponent.diceRoll draw message is shown', function () {
            it('should show victory screen if player.diceRoll is greater than opponent.diceRoll', function () {
              var answer = endgameResult('Draw');
              expect(answer).to.equal(document.write('The Game is a draw'));
            });
        });
    });
})();

(function () {
    describe('Endgame Result', function () {
        describe('test that function is passed a string', function () {
            it('should show victory screen if player.diceRoll is greater than opponent.diceRoll', function () {
              var answerS = endgameResult('Draw');
              var answerA = endgameResult([1,3,4]);
              var answerO = endgameResult(player);
              var answerN = endgameResult(7);
              var answerNaN = endgameResult(NaN);
              var answerU = endgameResult(player.somethingrandom);



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
    describe('Game Restart', function () {
        describe('test that endgame occurs, reset option is triggered', function () {
            it('should trigger gameRestart if passed endgame condition and clear player object', function () {
              var answerDraw = gameRestart('Draw');
              var answerLose = gameRestart('Failure');
              var answerWin = gameRestart('Victory');

              expect(answerDraw).to.equal(player);
              expect(answerLose).to.equal(player);
              expect(answerWin).to.equal(player);
            });
        });
    });
})();



>>>>>>> c5a3081f8c4643f24b2c9bf09866ac19332bdcaa
