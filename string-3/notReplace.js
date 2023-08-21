function notReplace(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'i' && str[i + 1] === 's' && !isLetter(str[i - 1]) && !isLetter(str[i + 2])) {
      result += 'is not';
      i++; // Skip the next character 's'
    } else {
      result += str[i];
    }
  }

  return result;
}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}