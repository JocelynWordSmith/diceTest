/* global describe, it */
// 'use strict';
	

(function () {
'use strict';
	describe('submit click function', function () {
			//sets dice sides to ten
			$('.dice-sides').val(10);
			//clicks the button
			$('.submit').click()

		it('should set player.sides and computer.sides to the input value when clicked', function () {
			expect(parseInt(player.diceSides)).to.equal(10);
			expect(parseInt(computer.diceSides)).to.equal(10);
		});

		it('should trigger rollCompare', function () {
			expect(parseInt(player.diceSides)).to.be.within(1,10);
			expect(parseInt(computer.diceSides)).to.be.within(1,10);
		});
		it('should put the information on the page', function () {
			expect($('.answer').html().length).to.equal(('player score: ' + player.score +'<br>computer score: ' + computer.score + '<br><h1> ' + outcome + '</h1>').length)
		});
	});
})();





