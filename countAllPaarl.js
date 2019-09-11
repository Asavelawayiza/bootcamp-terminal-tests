module.exports = function countAllPaarl(regNum){
     var reg = regNum.split(',')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var paarl = reg[i];
      
     if (paarl.startsWith('CJ')){
     array.push(paarl);
    } 
     }
     return array.length;
   }
   
  
   
   