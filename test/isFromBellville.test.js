let assert = require("assert");
let isFromBellville = require("../isFromBellville");


describe('isFromBellville test' , function(){

    it('returns true if a registration number is for Bellville' , function(){
        var reg = 'CY 123, CJ 123'
   var FrmBel = isFromBellville(reg);
        assert.equal(isFromBellville(reg), FrmBel);
    
    })

    it('returns false if a registration number is not for Bellville' , function(){
        var reg = 'CA 123'
   var FrmBel = isFromBellville(reg);
        assert.equal(isFromBellville(reg), FrmBel);
    
    })


});