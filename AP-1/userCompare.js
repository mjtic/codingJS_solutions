function userCompare(aName, aId, bName, bId){
   // return -1 A before B;
   // return 1 A after B;
   // return 0 A === B;
   // Name > Id - if aName === bName
  if(aName.localeCompare(bName)<0){
    return -1
  }
  if(aName===bName){
    if(aId<bId){
      return -1
    }
    if(aId>bId){
      return 1;
    }
    if(aId===bId){
      return 0;
    }
  }
  return 1;
}