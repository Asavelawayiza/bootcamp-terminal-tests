let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill test' , function(){
    it('Calculate the total bill for the data provided' , function(){
        var data = 'call, sms, call, sms, sms, call, sms, sms, sms';
        var bill = totalPhoneBill(data);
      
       
        assert.equal(totalPhoneBill(data), bill);

    })
    it('should return R0.00 if no data is given' , function(){
        assert.equal(totalPhoneBill(''), 'R0.00' );

    })
});