let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('findItemsOver20 test', function () {
  it(' function should return all the products that have a quantity higher than 20.', function () {
    var results = [
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
    ];
    
    assert.deepEqual(findItemsOver20([{ 'name': 'apples', 'qty': 10 }, { 'name': 'pears', 'qty': 37 }, { 'name': 'bananas', 'qty': 27 }, { 'name': 'apples', 'qty': 3 }]), results)
  })


  it(' function should return false if the information entered is wrong.', function () {
    assert.equal(findItemsOver20("hjxukj"), false)
  })
});