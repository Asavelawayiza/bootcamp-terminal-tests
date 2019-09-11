let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe(' test' , function(){
    it('function should return products that have quantity higher than the threshold.' , function(){
      var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    var threshold = 20;
    var result = findItemsOver(itemList, threshold);
        assert.deepEqual(findItemsOver(itemList, threshold) , result)
          })

          it('function should return an empty array if product is not over threshold.' , function(){
            var itemList = [
              {name : 'apples', qty : 10},
              {name : 'pears', qty : 37},
              {name : 'bananas', qty : 27},
              {name : 'apples', qty : 3},
          ];
          var threshold = 20;
            
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 3}], threshold), [])
              })
        });