module.exports = function yearsAgo(year){
   const day = new Date();
   var getFullYear2 = day.getFullYear();
    var results = getFullYear2 - year;
   return results;
  }   
  
  