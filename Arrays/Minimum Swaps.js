function minimumSwaps(n, arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const right = i + 1;
        // if 1 is not in first pos in arr
        if (arr[i] !== right) {
            // find where value 1 is and swap
            const rightIdx = arr.indexOf(right, i);
            // where 1 was put the old val
            arr[rightIdx] = arr[i];
            // and put the 1 in the correct pos
            arr[i] = right;
            count++;
        }
    }
    return count;
}
