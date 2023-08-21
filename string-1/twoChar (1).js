function twoChar(str, index){
   return index>=str.length-1||index<0?str.slice(0,2):str.slice(index, index+2);