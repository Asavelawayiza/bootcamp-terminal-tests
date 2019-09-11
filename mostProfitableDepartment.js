


module.exports = function mostProfitableDepartment(list){
        var profitable = 0;
        var theDay =[];
        for(var i=0; i<list.length; i++){
            var theSales = list[i].sales;
            var theDepartment =  list[i].department;
            if(theDay < theSales){
                theDay = theSales;
                profitable = theDepartment;
            }
           }
           return profitable;
             }
            
           

        function mostProfitableDay(list){
            var profitable = 0;
            var theDay =[];
        for(var i=0; i<list.length; i++){
            var theSales = list[i].sales;
            var theDay =  list[i].day;
            if(theDay < theSales){
                theDay = theSales;
                profitable = theDay;
            }
           }
           return theDay;
        }