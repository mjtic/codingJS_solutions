function xyzMiddle(str){
 let len = str.length;
  if(len<3){
  return false;
  }
  
  let mid= Math.floor(str.length/2);
  if(len%2===1){
   return str.slice(mid-1,mid+2)==='xyz';
  }
  
  let lt = str.slice(mid-2,mid+1)==='xyz';
  let rt = str.slice(mid-1,mid+2)==='xyz';
  
  return lt||rt; 
}