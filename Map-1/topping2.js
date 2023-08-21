function topping2(someMap){
  //key 'ice cream' === key 'yogurt'
  //key 'spinach' - 'nuts'
  
  if(someMap.has('ice cream')){
    someMap.set('yogurt',someMap.get('ice cream'));
  }
  if(someMap.has('spinach')){
    someMap.set('spinach','nuts')
  }
  return someMap;
}