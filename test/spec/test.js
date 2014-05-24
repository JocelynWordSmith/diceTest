/* global describe, it */
(function () {
  describe('Create Die Button', function () {
      var inputValue = parseInt($('.dice-sides').val('5'));
      // then click the button
      $('.submit').click();
      /*
      it("should create a die and store it in the diceSides", function(){
        var player = new Dice(5);
        expect(player.diceSides).to.be.equal(5);
        //console.log(player.diceSides);
      });*/

      it("should create a die with sides equal the input value", function(){
        var inputValue = 10
        expect(Dice).to.have.property(Dice.diceSides, inputValue);
      
      });
      
      it('should give alert if less than 2 OR larger than 20', function () {
        
        expect(inputValue(21,100000000)).to.equal(alert('select number between 2-20'));
        expect(inputValue(1,-100)).to.equal(alert('select number between 2-20')); 
      
      }); 

      it('should give alert if NaN', function () {

        expect(inputValue(NaN)).to.equal(alert('not a number, select a number 2-20'));
      
      });
    });
})();
/*
(function () {
    describe("Dice Constructor", function(){
 
      it("should pass a sides value to instances", function(){
        var player = new Dice(20);
        expect(diceSides).to.have.property('sides');
      });
 
      it("should accept a number or a number as a string as its argument", function(){
        var player = new Dice('10');
        expect(diceSides.sides).to.equal(10);
      })
 
      it("should return its min and max values", function(){
          var player = new Dice('7');
          for (var i = 0; i < 1000; i += 1) {
            expect(die.roll()).to.be.within(1,7);
          }
      })

      it("dice roll should be within die side range", function(){

// rather than putting math.floor within the test should I not just place the object method define in our main.js?
          expect(Dice.roll(sides)).to.be.within(1, player.diceSides);
      })    

      it("Should test for timeout??", function(){
          setTimeout(done, 1000);
      })
    })
})();

*/


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


