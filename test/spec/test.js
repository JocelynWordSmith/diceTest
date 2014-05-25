
/* global describe, it */

'use strict';

(function () {
  describe('Constructor button', function () {
      $('.submit').click()
      var inputValue = 5;
      var player1 = new Dice(inputValue);
      var player2 = new Dice(inputValue);
      var player3 = new Dice(inputValue);

      it("should create a die and store it in the diceSides", function(){
      // passed
        expect(player1.diceSides).to.equal(5);
        expect(player2.diceSides).to.equal(5);
        expect(player3.diceSides).to.equal(5);
      });

      it("should create a die with sides equal the input value", function(){
      //passed
        player3.should.have.property('diceSides', 5)
      });
      
      it('should not be less than 2 OR larger than 20', function () {
      //passed
        expect(inputValue).to.not.be.above(20);
        expect(inputValue).to.be.below(20);
      }); 

      it('should not return a string or NaN', function () {
      //passed
        expect(inputValue).to.not.equal(NaN);
        expect(inputValue).to.not.equal('string');
      });

      it('should call rollcompare function with arguments', function () {
      //passed
        function rollCompare () {
          expect(playerScore, computerScore).to.be.arguments;
        }
      });

    });

})();

(function () {
    describe("Dice Constructor", function(){

      it("should assert that the target is an instance of constructor.", function(){
        // passed
        var player2 = new Dice2('sides');
        expect(player2).to.be.an.instanceof(Dice2);
      });

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


