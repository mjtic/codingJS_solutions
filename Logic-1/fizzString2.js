function fizzString2(n){
  if(n%3===0 && n%5===0){
    return 'Fizz' + 'Buzz' + '!';
  }
  if(n%5===0){
    return 'Buzz' + '!';
  }
  if(n%3===0){
    return 'Fizz' + '!';
  }
  return n + '!';
}