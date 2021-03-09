function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

// with cache
const fibonacci = (n, cache = {}) => {
    if (n < 0 || n === undefined) return null;
    if (n < 2) return n;
    if (cache[n]) return cache[n];
    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    return cache[n];
};

// with no additional space
function fibonacci(n) {
    let prev1 = 0;
    let prev2 = 1;
    let curr = -1;

    for (let i = 0; i <= n - 2; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return curr;
}
// for loop              0 1 2 3
// fib no value      0 1 1 2 3 5
// fib no index      0 1 2 3 4 5