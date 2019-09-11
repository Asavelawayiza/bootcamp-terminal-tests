let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo test' , function(){
    it('takes in a year and return how many years ago that was' , function(){
        var year = 2012;
        var day = yearsAgo(year);
        
        
        assert.equal(yearsAgo(day), year);

    });
    it('takes in a day and return how many years ago that was' , function(){
        var year = 2012;
        var day = yearsAgo(year);
        
        
        assert.equal(yearsAgo(year), day);

    });


}); 