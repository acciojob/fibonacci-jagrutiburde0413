function fibonacci(num) {
var a = 0;
  var b = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = a + b;
    a = b;
   b= sum;
  }
  return b;
}

module.exports = fibonacci;
