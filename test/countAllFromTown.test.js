let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown test' , function(){
    it('should return registration numbers in the string that is for that town.' , function(){

        var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
        var loc = "CL"
        var fromTown = countAllFromTown(regNum,loc);
        
        assert.equal(2, fromTown);
    })

    it('should return zero if there is no registration numbers in that string.' , function(){
        var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
        var town = "";

        assert.equal(countAllFromTown(regNum), town);
    })

});
