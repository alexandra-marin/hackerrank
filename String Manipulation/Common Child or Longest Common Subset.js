// # 1
function commonChild(s1, s2) {
    let firstLetters = s1.split('');
    let secondLetters = s2.split('');
    let length = firstLetters.length + 1;
    let results = Array(length).fill(Array(length).fill(0));

    for (let i = 0; i < length - 1; i++) {
        results[i + 1] = [0]; // why?
        for (let j = 0; j < length - 1; j++) {
            if (firstLetters[i] == secondLetters[j]) {
                results[i + 1][j + 1] = results[i][j] + 1;
            } else {
                results[i + 1][j + 1] = Math.max(results[i + 1][j], results[i][j + 1]);
            }
        }
    }
    return results[length - 1][length - 1];
}

// same as # 1 but diff indexed cache table
function commonChild(s1, s2) {
    let firstLetters = s1.split('');
    let secondLetters = s2.split('');
    let length = firstLetters.length + 1;
    let results = Array(length).fill(Array(length).fill(0));

    for (let i = 1; i < length + 1; i++) {
        results[i] = [0]; // why?
        for (let j = 1; j < length + 1; j++) {
            if (firstLetters[i - 1] == secondLetters[j - 1]) {
                results[i][j] = results[i - 1][j - 1] + 1;
            } else {
                results[i][j] = Math.max(results[i - 1][j], results[i][j - 1]);
            }
        }
    }
    return results[length - 1][length - 1];
}

// # 2
function commonChild(s1, s2) {
    let arr = [Array(s2.length + 1).fill(0)];
    [...s1].forEach((v1, i) => {
        arr[i + 1] = [0];
        [...s2].forEach((v2, j) => {
            arr[i + 1][j + 1] = v1 === v2 ?
                arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
        });
    });
    return arr[s2.length][s1.length];
}