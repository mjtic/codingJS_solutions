function fizzString(str){
  let fizz = str[0] === 'f';
  let buzz = str.slice(-1) ==='b';
  
  if(fizz && buzz){
    return 'FizzBuzz';
  }
  if(fizz){
    return 'Fizz';
  }
  if(buzz){
    return 'Buzz';
  }
  return str;
}

    