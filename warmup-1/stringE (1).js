// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str) {
  // Count the number of 'e' chars in the string
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'e') {
      count++;
    }
  }
  // Check if the count is between 1 and 3 inclusive
  return count >= 1 && count <= 3;
}