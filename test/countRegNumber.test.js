let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('countRegNumber test' , function(){
it('should return the number of registration numbers in the string' , function(){
  var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
    assert.equal(regCount, 3)
    
      })

      it('should return dataLength when given regCount' , function(){

        var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
        var regCount = countRegNumber(regNum);
     
        var dataLength = 'CJ 124,CY 567,CL 345, CF 456, CL 341';

        assert.equal(countRegNumber(dataLength) , regCount)
          });
    
});