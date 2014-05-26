// 'use strict';

// (function () {
//   describe('Dice Constructor', function () {
//     //sets dice sides to twelve
//     var testDice = new Dice(12);

//     it('should set dicesides attributes to input value', function () {
//       expect(testDice.diceSides).to.equal(12);
//     });

//     it('should set score attribute to a roll between 1 and the input', function () {
//       expect(testDice.diceSides).to.be.within(1,12);
//     })
//   });
// })();

// (function () {
//   describe('Roll Compare', function () {
//     var sides = 12;

//     var player1 = new Dice(sides);
//     var player2 = new Dice(sides);
//     var player3 = new Dice(sides);
    
//     var computer1 = new Dice(sides);
//     var computer2 = new Dice(sides);
//     var computer3 = new Dice(sides);

//     rollCompare();

//     it('should total the three dice rolls for a total score', function () {

//       expect(playerScore).to.equal(player1.score + player2.score + player3.score);
//       expect(computerScore).to.equal(computer1.score + computer2.score + computer3.score);

//     })
//   })
// })();
























(function () {

  describe('submit click function', function () {
      //sets dice sides to ten
      $('.dice-sides').val(10);
      //clicks the button
      $('.submit').click();
    
      expect(player1.diceSides).to.equal(10);
      expect(computer1.diceSides).to.equal(10);
    });

    it('should trigger rollCompare', function () {
      expect(player1.diceSides).to.be.within(1,10);
      expect(computer1.diceSides).to.be.within(1,10);
    });

    it('should put the information on the page', function () {
      expect($('.player-roll1').html().length).to.equal((('player score: ' + player1.score).length));
      expect($('.player-roll2').html().length).to.equal(('player score: ' + player2.score).length);
      expect($('.player-roll3').html().length).to.equal(('player score: ' + player3.score).length);
      expect($('.computer-roll1').html().length).to.equal(('computer score: ' + computer1.score).length);
      expect($('.computer-roll2').html().length).to.equal(('computer score: ' + computer2.score).length);
      expect($('.computer-roll3').html().length).to.equal(('computer score: ' + computer3.score).length);

      // done()
    });

      
      it("should create a die and store it in the diceSides", function(){
      // passed
      // $('.submit').click()
      var inputValue = 5;
      var player1 = new Dice(inputValue);
      var player2 = new Dice(inputValue);
      var player3 = new Dice(inputValue);



      it("should create a die and store it in the diceSides", function(){
      
        expect(player1.diceSides).to.equal(5);
        expect(player2.diceSides).to.equal(5);
        expect(player3.diceSides).to.equal(5);
      });

        
      it("should create a die with sides equal the input value", function(){

        var player3 = new Dice(5);
        //passed
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

      it('should call rollcompare function with arguments', function () {
      
        function rollCompare () {
          expect(playerScore, computerScore).to.be.arguments;
        }
      });

      it("Should test for timeout", function(){
        setTimeout(done, 1000);
      })



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
        //console.log(something.diceSides);
        expect(something.diceSides).to.equal(10);

      })
 
      it("should return its min and max values", function(){
        
        var player1 = new Dice('20');
        expect(player1.roll()).to.be.within(1, player1.diceSides);
      })

      it("should return roll value to score property", function(){
        
        var player1 = new Dice('20');
        expect(player1.score).to.be.within(1, player1.diceSides);
      })
    })
// done();
})();
// (function () {
//   describe('reset click', function (){
    

      

//     $('.reset').click()

//     it('should set all values to empty strings', function (){

//       expect($('.dice-sides').val()).to.equal('');
//       expect($('.player-roll1').html().length).to.equal(0);
//       expect($('.player-roll2').html().length).to.equal(0);
//       expect($('.player-roll3').html().length).to.equal(0);
//       expect($('.computer-roll3').html().length).to.equal(0);
//       expect($('.computer-roll3').html().length).to.equal(0);
//       expect($('.computer-roll3').html().length).to.equal(0);
//       expect($('.winner').html().length).to.equal(0);
//       expect($('.cub-1').hasClass('active')).to.equal(false);


//     })
//   })
// })();

