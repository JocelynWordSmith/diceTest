
/* global describe, it */

/* global describe, it */

'use strict';

(function () {
  describe('Constructor button', function () {
      
      it("should create a die and store it in the diceSides", function(){
      // passed
        var player1 = new Dice1(5);
        var player2 = new Dice2(5);
        var player3 = new Dice3(5);

        expect(player1.diceSides).to.equal(5);
        expect(player2.diceSides).to.equal(5);
        expect(player3.diceSides).to.equal(5);
      });

      /*it("should create a die with sides equal the input value", function(){
        //passed
        var inputValue = 5;
        var player3 = new Dice3(inputValue);
        player3.should.have.property('diceSides', 5)

      });
      
      it('should give alert if less than 2 OR larger than 20', function () {
        var inputValue = 90;
        expect(inputValue(21,100)).to.equal(alert("Please select a number between 2-20."));
        expect(inputValue(1,-100)).to.equal(alert("Please select a number between 2-20.")); 

          expect(inputValue).to.not.be.above(20);
      }); 


      it('should give alert if NaN', function () {

        expect(inputValue(NaN)).to.equal();
      
      });

      it('should call rollcompare function with arguments', function () {

        function rollCompare () {
          expect(playerScore, computerScore).to.be.arguments;
        }
      
      });*/

    });
})();

