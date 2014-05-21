/* global describe, it */

(function () {
    'use strict';

    describe('input valid', function () {
        describe('input valid number', function () {
            it('should give alert if NaN', function () {
              var answer = inputValid(NaN);
              expect(answer).to.equal(alert('not a number, select a number 2-20'));
            });
        });
    });
})();

