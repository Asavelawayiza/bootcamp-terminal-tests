module.exports = function regCheck(reg, loc){
    // return reg.endsWith(loc);
    console.log(reg);
      if (reg.endsWith('GP')){
            return true;
      }
      else if (reg.endsWith('L')){
           return true;
      }
      else if (reg.endsWith('EC')){
          return true;
      }
      else if (reg.endsWith('MP')){
            return true;
      }
    else {
      return false;
    }
  }
 