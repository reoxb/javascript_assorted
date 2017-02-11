let fibonacci = 0;
//** algoritmo recursivo ingenuo
function fib_r(n)
{
    if (n == 0) { return 0; }
    if (n == 1) { return 1; }

    return(fib_r(n-1) + fib_r(n-2));
}

let fibonacci_recursivo = fib_r(6);
console.log(fibonacci_recursivo);
