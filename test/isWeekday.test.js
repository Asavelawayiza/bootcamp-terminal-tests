let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('isWeekday test', function () {
    it('returns true if the parameter passed in is a day of the week', function () {

        
        var days = 'tuesday , Saturday , Monday';
        // assert.equal(isWeekday('tuesday'), false);
        assert.equal(isWeekday(days), isWekDay);

    })
    it('return false if the parameter passed in is not a day of the week', function () {

        
        assert.equal(isWeekday(days), isWekDay);


    });


}); 