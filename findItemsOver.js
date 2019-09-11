
module.exports = function findItemsOver(list, threshold){
    var itemList = [];
    for (var i=0; i<list.length; i++){
        if (list[i].qty > threshold){
          itemList.push(list[i]);
     }
    }
      return itemList;
    }
   