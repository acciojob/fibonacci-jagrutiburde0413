function fibonacci(num) {

if(n===1){
	return 0
}if(n===2){
	return 1
}
return fibonacci(num-1)+fibonacci(n-2)
}

module.exports = fibonacci;
