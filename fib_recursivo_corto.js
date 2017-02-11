//** algoritmo recursivo podado el arbol
let f = [];
f[0] = 0, f[1] = 1;

function fib_c(n) {
   if (f[n] === undefined) { f[n] = fib_c(n-1) + fib_c(n-2); }
   return(f[n]);
}

let fib_short = fib_c(89);
console.log(fib_short);
