function fibonacci(n){

	let fib_1 = 1;
	let fib_2 = 0;

	if ( n == fib_1){ return 1;}
	if ( n == fib_2){ return 0;}

	for (let i = 2; i <= n; i++){
		var fib  = fib_1 + fib_2;
		fib_2 = fib_1;
		fib_1 = fib;
	}
	return fib;
}

console.log(fibonacci(6));
