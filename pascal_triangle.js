//function that compute the binomial
function binomial(n, k) {
   if(k === 0) return 1;
   if(k === n) return 1;
   return(binomial(n-1, k-1) + binomial(n-1, k));
}
//function who create the pascal triangle
function pascal(n) {
let triangle = Array.from( { length: n }, ( ) => new Array(n).fill(0));
	for(let i = 0; i < n; i++) {
		for(let j = 0; j <= i; j++) {
			triangle[i][j] = binomial(i , j);
		}
	}
	return triangle;
}

console.log(pascal(5));
