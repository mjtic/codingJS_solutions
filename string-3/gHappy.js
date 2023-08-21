function gHappy(str) {
  let len = str.length;
  let happy = true;
  
  for(let i=0; i<len; i++){
    if(str[i]==='g'){
      if(i>0 && str[i-1]==='g'){
        happy = true;
      }else if(i<len-1 && str[i+1]==='g'){
        happy = true;
      } else{
        happy = false;
      }
    }
  }
  return happy;
}
