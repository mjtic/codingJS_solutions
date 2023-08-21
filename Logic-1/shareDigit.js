function shareDigit(a, b){
  return (a%10===b%10 || Math.floor(a/10)===Math.floor(b/10)|| a%10 === Math.floor(b/10) || Math.floor(a/10) === b%10)
}