function withoutString(base, remove) {
let result = '';
let removeLow = remove.toLowerCase();
  
  for(let i=0; i<base.length; i++){
    if(base.slice(i, i+remove.length).toLowerCase()===removeLow){
      i+= remove.length -1;
    }else{
      result+= base[i];
    }
  }
  return result;
}
