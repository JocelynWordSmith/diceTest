/* global describe, it */

'use strict';

(function () {
  describe('Constructor button', function () {
      $('.submit').click()
      var inputValue = 5;
      var player1 = new Dice(inputValue);
      var player2 = new Dice(inputValue);
      var player3 = new Dice(inputValue);
      var computer1 = new Dice(inputValue);

      it("should create a die and store it in the diceSides", function(){   
        expect(player1.diceSides).to.equal(5);
        expect(player2.diceSides).to.equal(5);
        expect(player3.diceSides).to.equal(5);
      });

      it("should create a die with sides equal the input value", function(){  
        player3.should.have.property('diceSides', 5)
      });


      
      it('should not be less than 2 OR larger than 20', function () {
        expect(inputValue).to.not.be.above(20);
        expect(inputValue).to.be.below(20);
      }); 

      it('should not return a string or NaN', function () {
        expect(inputValue).to.not.equal(NaN);
        expect(inputValue).to.not.equal('string');
      });

      it('should trigger rollCompare', function () {
        expect(player1.diceSides).to.be.within(1,10);
        expect(computer1.diceSides).to.be.within(1,10);
      });

      it('should call rollcompare function with arguments', function () {
      
        function rollCompare () {
          expect(playerScore, computerScore).to.be.arguments;
        }
      });

      it('should render the information on the page', function () {
        expect($('.player-roll1').html().length).to.equal(('player score: ' + player1.score).length);
        
        expect($('.computer-roll1').html().length).to.equal(('computer score: ' + computer1.score).length);
        
      });

      it("Should test for timeout", function(done){

          setTimeout(done, 1000);
      });

    });
})();

(function () {
    describe("Dice Constructor", function(){


      it("should assert that the target is an instance of constructor.", function(){
        
        var player2 = new Dice('sides');
        expect(player2).to.be.an.instanceof(Dice);
      });

      it("should pass property values to instances", function(){
        
        var computer3 = new Dice();
        computer3.should.have.property('diceSides')
        computer3.should.have.property('roll')
        computer3.should.have.property('score')
      });
 
      it("should accept a number as a string as its argument", function(){

        var something = new Dice('10');
        expect(something.diceSides).to.equal(10);

      });
 
      it("should return its min and max values", function(){
        
        var player1 = new Dice('20');
        expect(player1.roll()).to.be.within(1, player1.diceSides);
      });

      it("should return roll value to score property", function(){
        
        var player1 = new Dice('20');
        expect(player1.score).to.be.within(1, player1.diceSides);
      });

    })
})();