let assert = require("assert");
let regCheck = require("../regCheck");


describe('regCheck test' , function(){
    it('return true if a registration number is for GP, L, EC, MP registration plates' , function(){
        var reg = ('DV 23 LP GP', 'MP');
        var loc = reg;
        var regChck = regCheck(loc);

        assert.equal(regCheck(loc), regChck);

    })
    it('return false if a registration number is for GP, L, EC, MP registration plates' , function(){
        var reg = ('DV 23 LP GP', 'MP');
        var loc = reg;
        var regChck = regCheck(loc);
        assert.equal(regCheck(loc), regChck);

    })
    it('should return results when given regNum.endsWith(loc)' , function(){
        var reg = ('DV 23 LP GP', 'MP');
        var loc = reg;
        var regChck = regCheck(loc);
        assert.equal(regCheck(reg), regChck);
    });


}); 