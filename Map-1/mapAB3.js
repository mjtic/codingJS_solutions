function mapAB3(someMap){
  // 'a' || 'b' has a value then , === 
  
  if(someMap.has('a') && someMap.has('b')){
    someMap;
  }
  else if(someMap.has('a')){
    someMap.set('b',someMap.get('a')); 
  }else if(someMap.has('b')){
    someMap.set('a',someMap.get('b'));
  }
  return someMap;
}