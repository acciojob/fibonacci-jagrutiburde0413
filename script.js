function fibonacci(num) {
	 if (num === 1) return 0;
  else if (num === 2) return 1;
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
