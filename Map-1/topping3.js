function topping3(someMap){
  // key 'potato' === key 'fries'
  // key 'salad' === key 'spinach'
  
  if(someMap.has('potato')){
    someMap.set('fries', someMap.get('potato'));
  }
  if(someMap.has('salad')){
    someMap.set('spinach', someMap.get('salad'));
  }
  return someMap;
}