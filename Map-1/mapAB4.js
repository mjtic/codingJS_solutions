function mapAB4(someMap){
  //key'a' && 'b' have diff value length, then have c longer value between a or b
  //key'a' && 'b' have same value length, then '';
  
  if(someMap.has('a') && someMap.has('b')){
    if(someMap.get('a').length===someMap.get('b').length){
      someMap.set('a','');
      someMap.set('b','');
    } 
     else if(someMap.get('a').length<someMap.get('b').length){
      someMap.set('c',someMap.get('b'))
    }else {
      someMap.set('c',someMap.get('a'))
    }
  }
  
  return someMap;
}