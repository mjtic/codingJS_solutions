function mapAB2(someMap){
  //'a' && 'b' present and === , then remove both;
  
  if(someMap.has('a')&&someMap.has('b')){
    if(someMap.get('a')===someMap.get('b')){
      someMap.delete('a');
      someMap.delete('b');
    }
  }
  return someMap;
}