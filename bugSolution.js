function foo(a, b) {
  // Check if b is undefined and replace with 0 if it is.
  b = (typeof b === 'undefined') ? 0 : b; 
  return a + b;
}
console.log(foo(1, undefined)); // Output: 1