// Starting with a 1-indexed array of zeros and a list of operations, for each
// operation add a value to each of the array element between two given indices,
// inclusive. Once all operations have been performed, return the maximum value in the array.

function arrayManipulation(n, queries) {
    // bc is 1-based
    // 0 pos is ignored, so n + 1
    // the algo will use (pos + 1) on last pos incl, so n + 2 pos are needed total
    let arr = Array(n + 2).fill(0);

    queries.map(q => {
        let [a, b, k] = q;

        // apply prefix sum algo
        // where you calculate curr el = prev el + curr el
        arr[a] += k;
        arr[b + 1] -= k;
    });

    let max = 0;
    for (var i = 1; i <= n; i++) {
        arr[i] = arr[i] + arr[i - 1];
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Math.max returns runtime error...
    return max;
}
