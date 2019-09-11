let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('fromWhere test', function () {
  it('takes a car registration number as a parameter and returns the town the car is from', function () {
    var reg = 'CY, CJ, CA, CC';
    var where = fromWhere(reg);


    assert.equal(fromWhere(reg), where)
  })
  it('If reg number starts with CY return Bellville', function () {
    var reg = 'CY, CJ, CA, CC';
    var CY = 'Bellville';

    assert.equal(fromWhere(reg), CY)
  })
  it('should return some other place if doen not recorgnise the  registration number given', function () {
    assert.equal(fromWhere(''), 'some other place')
  })
})
