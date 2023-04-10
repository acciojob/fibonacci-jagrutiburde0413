function fibonacci(num) {

if(n===1){
	console.log("0")
}if(n===2){
	console.log("1")
}
console.log(fibonacci(num-1)+fibonacci(n-2))
}

module.exports = fibonacci;
