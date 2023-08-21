function dividesSelf(n){
 let newN = n;
  while(n>0){
   if(n%10===0){
     return false;
   } else if(newN%(n%10)===0){
     n = Math.floor(n/10);
   }else{
     return false;
   }
 }
  return true;
}