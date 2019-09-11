module.exports = function totalPhoneBill(data){
    var call = 0;
    var sms = 0;
    var list = data.split(', ')
    for (var i=0; i<list.length; i++){
     var totalBill =  list[i];
      if (totalBill === 'call'){
        call++;
      }
    else if (totalBill === 'sms'){
        sms++;
    }
     
      var count = (call*2.75) + (sms*0.65);
    
    }  
    return 'R' + count.toFixed(2);
  }

  