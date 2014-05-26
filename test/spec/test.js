/* global describe, it */

'use strict';

(function () {
  describe('Constructor button', function () {
      $('.submit').click()
      var inputValue = 5;
      var player1 = new Dice1(inputValue);
      var player2 = new Dice1(inputValue);
      var player3 = new Dice1(inputValue);

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
        var player2 = new Dice1('sides');
        expect(player2).to.be.an.instanceof(Dice1);
      });

      it("should pass a sides value to instances", function(){
        var player = new Dice1(20);
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

(function () {
    describe('rollCompare function', function () {
       
        it('should return winner as player if player.score is greater than computer.score', function () {

          $('.submit').click();

          var player = 4;
          var computer = 2;

          expect(player).to.be.above(computer);
        });
       
      it('should return winner as computer if computer.score is greater than player.score', function () {

        $('.submit').click();

        var player = 2;
        var computer = 4;

        expect(computer).to.be.above(player);
      });
        
      it('should return tie if player.score is equal to computer.score', function () {

        $('.submit').click();

        var player = 10;
        var computer = 10;
 
        expect(player).to.equal(computer);
      });      
    });
})();

(function() {
  describe('Reset button', function() {
    it('Should reset player score', function() {

      $('.reset').click();

      expect($('.player-roll1').html()).to.equal();
      expect($('.player-roll2').html()).to.equal();
      expect($('.player-roll3').html()).to.equal();
    });

    it('should reset computer score', function() {

      $('.reset').click();

      expect($('.computer-roll1').html()).to.equal();
      expect($('.computer-roll2').html()).to.equal();
      expect($('.computer-roll3').html()).to.equal();
    });

    it('should reset the winner', function() {

      $('.reset').click();

      expect($('.winner').html()).to.equal();
    })

    it('should remove active class from cube', function() {

      $('.reset').click();

      expect($('.cub-1').removeClass()).to.not.equal("active")
    })
  });
})();



