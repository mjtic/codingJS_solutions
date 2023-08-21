function linearIn(outer, inner) {
  let outerIndex = 0;
  let innerIndex = 0;
  
  while(outerIndex<outer.length && innerIndex<inner.length){
    if(outer[outerIndex] === inner[innerIndex]){
      innerIndex++;
    }
    outerIndex++;
  }
  return innerIndex === inner.length;
}