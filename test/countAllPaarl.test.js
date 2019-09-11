let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('countAllPaarl test' , function(){
    it('takes a parameter string with registration numbers and returns the number of registration numbers in the string for Paarl' , function(){
        var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
        var paarl = regNum.startsWith('CJ');
        
       
        assert.equal(countAllPaarl(regNum), paarl);

    })
    it('takes a parameter string with registration numbers and returns the number of registration numbers in that string.' , function(){
        var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
        var allPaarl = countAllPaarl(regNum);
        assert.equal(countAllPaarl(regNum), allPaarl);

    })
})