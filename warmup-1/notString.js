function notString(str){
  // let not = 'not'
  // if str.startsWith 'not' return str
  // else return not.concat(str);
  let strNot = "not"
  if (str.startsWith("not")){
  return str;
  } else {
  return strNot.concat(" ",str);
  }
}