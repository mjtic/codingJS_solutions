function startOz(str){
 if (str.length >= 2){
  if (str.charAt(0) === 'o' && str.charAt(1) === 'z'){
  return 'oz';
  }
  if (str.charAt(0) ==='o'){
   return 'o';
   }
  if (str.charAt(1)==='z'){
    return 'z';
    }else 
      return '';
 } 
   else if (str.length === 1 && str.charAt(0) === 'o') {
    return 'o';
  } else {
    return '';
}
