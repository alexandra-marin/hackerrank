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