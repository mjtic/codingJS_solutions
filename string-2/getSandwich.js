function getSandwich(str){
  let top = str.indexOf('bread');
  let bot = str.lastIndexOf('bread');
  if(str.includes('bread')){
  return str.slice(top+5,bot);
  }
  return '';
}