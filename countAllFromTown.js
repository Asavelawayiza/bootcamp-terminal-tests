module.exports = function countAllFromTown(regNum, loc){

     var reg = regNum.split(',')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var countAllFromTown = reg[i];
     if (countAllFromTown.startsWith(loc)||countAllFromTown.startsWith(' '+loc)){
     array.push(countAllFromTown);
    }
     }
     return array.length;
   }
