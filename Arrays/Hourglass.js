function hourglassSum(arr) {
    let max = 0;

    for (let row = 0; row < arr.length - 2; row++) { // rows 0 - 6 --> 4 hourglasses

        let computed = computeSumForRow(arr, row);

        if (computed > max) max = computed;
    }

    return max;
}

function computeSumForRow(arr, row) {
    let max = 0;

    for (let col = 0; col < arr.length - 2; col++) { // cols 0 - 6 --> 4 hourglasses

        let computed = computeSumForRowAndCol(arr, row, col);

        if (computed > max) max = computed;
    }

    return max;
}

function computeSumForRowAndCol(arr, row, col) {

    let sum = 0;

    sum += arr[row][col];
    sum += arr[row + 1][col];
    sum += arr[row + 2][col];

    sum += arr[row + 1][col + 1];

    sum += arr[row][col + 2];
    sum += arr[row + 1][col + 2];
    sum += arr[row + 2][col + 2];

    return sum;
}