function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else if (x > 0) {
    return 1; 
  } else {
    return 0; // Handle 0 explicitly
  }
}

console.log(foo(null)); // 0
console.log(foo(-1)); // -1
console.log(foo(0)); // 0
console.log(foo(1)); // 1