let assert = require("assert");
let transportFee = require("../transportFee");


describe('transportFee test', function () {
    it('returns the right price based on the shift you are working', function () {
        var shift = 'morning ,afternoon ,nightshift';
        var fee = transportFee(shift);

        assert.equal(transportFee(shift), fee);

    })
    it('returns free if you working nightshift', function () {
        var shift = 'morning ,afternoon ,nightshift';
        var transport = 'free';

        assert.equal(transportFee(shift), transport);

    })
})