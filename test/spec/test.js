
// (function () {

//   describe('submit click function', function () {
//       //sets dice sides to ten
//       $('.dice-sides').val(10);
//       //clicks the button
//       $('.submit').click();
    
//       expect(player1.diceSides).to.equal(10);
//       expect(computer1.diceSides).to.equal(10);
//     });

//     it('should trigger rollCompare', function () {
//       expect(player1.diceSides).to.be.within(1,10);
//       expect(computer1.diceSides).to.be.within(1,10);
//     });

//     it('should put the information on the page', function () {
//       expect($('.player-roll1').html().length).to.equal((('player score: ' + player1.score).length));
//       expect($('.player-roll2').html().length).to.equal(('player score: ' + player2.score).length);
//       expect($('.player-roll3').html().length).to.equal(('player score: ' + player3.score).length);
//       expect($('.computer-roll1').html().length).to.equal(('computer score: ' + computer1.score).length);
//       expect($('.computer-roll2').html().length).to.equal(('computer score: ' + computer2.score).length);
//       expect($('.computer-roll3').html().length).to.equal(('computer score: ' + computer3.score).length);

//       // done()
//     });
 
//       it("should create a die and store it in the diceSides", function(){
//       // passed
//       // $('.submit').click()
//       /* global describe, it */

// (function () {
//   describe('Constructor button', function () {
//       $('.submit').click()

//       var inputValue = 5;
//       var player1 = new Dice(inputValue);
//       var player2 = new Dice(inputValue);
//       var player3 = new Dice(inputValue);
//       var computer1 = new Dice(inputValue);

//       it("should create a die and store it in the diceSides", function(){   
//         expect(player1.diceSides).to.equal(5);
//         expect(player2.diceSides).to.equal(5);
//         expect(player3.diceSides).to.equal(5);
//       });

//       it("should create a die with sides equal the input value", function(){  
//         player3.should.have.property('diceSides', 5)
//       });


      
//       it('should not be less than 2 OR larger than 20', function () {
//         expect(inputValue).to.not.be.above(20);
//         expect(inputValue).to.be.below(20);
//       }); 

//       it('should not return a string or NaN', function () {
//         expect(inputValue).to.not.equal(NaN);
//         expect(inputValue).to.not.equal('string');
//       });

//       it('should trigger rollCompare', function () {
//         expect(player1.diceSides).to.be.within(1,10);
//         expect(computer1.diceSides).to.be.within(1,10);
//       });

//       it('should call rollcompare function with arguments', function () {
      
//         function rollCompare () {
//           expect(playerScore, computerScore).to.be.arguments;
//         }
//       });

//       it('should render the information on the page', function () {
//         expect($('.player-roll1').html().length).to.equal(('player score: ' + player1.score).length);
        
//         expect($('.computer-roll1').html().length).to.equal(('computer score: ' + computer1.score).length);
        
//       });

//       it("Should test for timeout", function(done){

//           setTimeout(done, 1000);
//       });
//     });
// })();

// (function () {
//     describe("Dice Constructor", function(){


//       it("should assert that the target is an instance of constructor.", function(){
        
//         var player2 = new Dice('sides');
//         expect(player2).to.be.an.instanceof(Dice);
//       });

//       it("should pass property values to instances", function(){
        
//         var computer3 = new Dice();
//         computer3.should.have.property('diceSides')
//         computer3.should.have.property('roll')
//         computer3.should.have.property('score')
//       });
 
//       it("should accept a number as a string as its argument", function(){

//         var something = new Dice('10');
//         expect(something.diceSides).to.equal(10);

//       });
 
//       it("should return its min and max values", function(){
        
//         var player1 = new Dice('20');
//         expect(player1.roll()).to.be.within(1, player1.diceSides);
//       });

//       it("should return roll value to score property", function(){
        
//         var player1 = new Dice('20');
//         expect(player1.score).to.be.within(1, player1.diceSides);
//     })
// })();

//
//
//
//
//
//
//Josh's tests that kinda work
//
//
//
//
//





(function () {
  describe('Roll Compare', function () {
    $('.dice-sides').val(12);
    $('.submit').click();


    it('should total the three dice rolls for a total score', function () {
      setTimeout(function() {
        expect(playerScore).to.equal(player1.score + player2.score + player3.score);
        expect(computerScore).to.equal(computer1.score + computer2.score + computer3.score);
      },2000);        
    })

    it('should display the outcome and scores', function () {

      setTimeout(function() {
      expect($('.wintext').html.length).to.equal('Player total: ' + playerScore + '<br>Computer total: '+ computerScore + '<br>'  + outcome).length;
      },2000);
    })

  })
})();

(function () {
  describe('Dice Constructor', function () {
    //sets dice sides to twelve
    var testDice = new Dice(12);

    it('should set dicesides attributes to input value', function () {
      expect(testDice.diceSides).to.equal(12);
    });

    it('should set score attribute to a roll between 1 and the input', function () {
      expect(testDice.diceSides).to.be.within(1,12);
    })
  });
})();


(function () {
  describe('win record', function () {

    it('should display the current score', function () {
      setTimeout(function() {
      expect($('.player-wins').html.length).to.equal('wins: ' + p).length;
      expect($('.computer-wins').html.length).to.equal('wins: ' + c).length;
      },2000);
    })
  })
})();

(function () {
  describe('animate die', function () {

    animateDie();

    it('should toggle between active class for cub-1', function () {

        expect($('.cub-1').hasClass('active')).to.equal(true);
        setTimeout(function() {
        expect($('.cub-1').hasClass('active')).to.equal(false);
        },500);
    })
    it('should toggle between slide class for tridiv', function () {

        expect($('#tridiv').hasClass('slide')).to.equal(true);
        setTimeout(function() {
        expect($('#tridiv').hasClass('slide')).to.equal(false);
        },1000);
    })
  })
})();

(function () {
  describe('showScores', function () {

      showScores();

    it('should display the players dice rolls', function () {
      setTimeout(function() {
        expect($('.player-roll1').html.length).to.equal(('First Dice Roll: ' + player1.score).length);
        expect($('.player-roll2').html.length).to.equal(('Second Dice Roll: ' + player2.score).length);
        expect($('.player-roll3').html.length).to.equal(('Third Dice Roll: ' + player3.score).length);
      },500);
    })

      it('should display the computers dice rolls', function () {
      setTimeout(function() {
        expect($('.computer-roll1').html.length).to.equal(('First Dice Roll: ' + computer1.score).length);
        expect($('.computer-roll2').html.length).to.equal(('Second Dice Roll: ' + computer2.score).length);
        expect($('.computer-roll3').html.length).to.equal(('Third Dice Roll: ' + computer3.score).length);
      },500);

    })
  })
})();

(function () {
  describe('submit click', function () {
    var sides = 12;
    $('.dice-sides').val(sides);
    $('.submit').click();

    it('should create player dice objects', function () {
      expect(player1.diceSides).to.equal(sides);
      expect(player2.diceSides).to.equal(sides);
      expect(player3.diceSides).to.equal(sides);
    })

    it('should create computer objects', function () {
      expect(computer1.diceSides).to.equal(sides);
      expect(computer2.diceSides).to.equal(sides);
      expect(computer3.diceSides).to.equal(sides);
    })
  })
})




(function () {
  describe('reset click', function (){
    $('.reset').click()

    it('should set all values to empty strings', function (){

      expect($('.dice-sides').val()).to.equal('');
      expect($('.player-roll1').html().length).to.equal(0);
      expect($('.player-roll2').html().length).to.equal(0);
      expect($('.player-roll3').html().length).to.equal(0);
      expect($('.computer-roll3').html().length).to.equal(0);
      expect($('.computer-roll3').html().length).to.equal(0);
      expect($('.computer-roll3').html().length).to.equal(0);
      expect($('.wintext').html().length).to.equal(0);
      expect($('.cub-1').hasClass('active')).to.equal(false);


    })
  })
})();




