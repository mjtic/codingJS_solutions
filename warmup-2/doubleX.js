function doubleX(str){
  let index = str.indexOf('x');
    if(index!==-1&&index+1<str.length&&str.charAt(index+1)==='x'){
      return true;
    }
     return false;
   }
