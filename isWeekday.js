module.exports = function isWeekday(days){
    var M = 'Monday';
    //console.log(days)
    if (days.startsWith('M')){
      return true;
    }
    else{
      return false;
    }
  };
  