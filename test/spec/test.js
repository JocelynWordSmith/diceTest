/* global describe, it */

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
