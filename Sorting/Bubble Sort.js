function countSwaps(a) {
    let swaps = 0;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swaps++;
                let t = a[j]
                a[j] = a[j + 1]
                a[j + 1] = t
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)
}