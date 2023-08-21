function strDist(str, sub){
  if (!str.includes(sub)) {
    return 0;
  }

  if (str.slice(0, sub.length) === sub && str.slice(-sub.length) === sub) {
    return str.length;
  }

  if (str.slice(0, sub.length) !== sub) {
    return strDist(str.slice(1), sub);
  }

  return strDist(str.slice(0, -1), sub);
}