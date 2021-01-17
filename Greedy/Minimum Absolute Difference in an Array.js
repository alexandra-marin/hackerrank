function minimumAbsoluteDifference(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;
    for (let i = 0; i < sorted.length - 1; i++) {
        let val = Math.abs(sorted[i] - sorted[i + 1])
        min = Math.min(val, min);
    }
    return min;
}