function fibonacci(num) {
let a=0;
	let b=1;
	let c;
	for(let i=0;i<num;i++){
		c=a+b;
		a=b;
		b=c;
	}
	return b
}

module.exports = fibonacci;
