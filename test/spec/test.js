/* global describe, it */

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
		it('should sets opponent.diceSides = player.diceSides', function () {

			expect(opponent.diceSides).to.be.equal(player.diceSides);
		});
	});
})();




 /*
    describe('Function that picks random number for dice roll', function () {
      
      it('should multiply its argument by itself', function(){
        var answer = square(2);
        expect(answer).to.equal(4);
      });
 
      it('should throw errors for non-Number types', function(){
 
        var erroneousSquare = function(){
          square('2');
        }
 
        var nanSquare = function(){
          square(NaN);
        }
 
        expect(erroneousSquare).to.throw(Error);
        expect(nanSquare).to.throw(Error);
      });
 
      it('should throw an error when no args are provided', function(){
 
        expect(square).to.throw(Error);
 
      })
    });

})(); */