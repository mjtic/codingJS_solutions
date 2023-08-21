function blackjack(a, b){
  if(a>21 && b>21){
    return 0;
  }
 else if (a > 21 && b <= 21){
    return b;
 }
 else if (a <= 21 && b > 21){
    return a;
 }
    return Math.max(a, b);
}