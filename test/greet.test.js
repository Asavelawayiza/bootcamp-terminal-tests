let assert = require("assert");
let greet = require("../greet");


describe('greet test', function () {
    it('takes neighbour’s name as a parameter and returns a greeting message ', function () {
        var name = 'Andy';
        var greeting = greet(name);

        assert.equal(greet("Andy"), greeting);

    })
    it('should return a greeting message if given a name', function () {
        var name = 'Andy';
        var greeting = greet(name);
        assert.equal(greet(name), greeting);

    })
});
