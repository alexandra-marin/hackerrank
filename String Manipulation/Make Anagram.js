function makeAnagram(a, b) {
    let aMap = new Map();
    a.split('').forEach(word => {
        let prevVal = aMap.get(word) || 0;
        aMap.set(word, prevVal + 1);
    });

    let bMap = new Map();
    b.split('').forEach(word => {
        let prevVal = bMap.get(word) || 0;
        bMap.set(word, prevVal + 1);
    });

    let counter = 0
    let letters = [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    for (let key of letters) {
        let aValue = aMap.get(key) || 0;
        let bValue = bMap.get(key) || 0;

        counter += Math.abs(aValue - bValue)
    }

    return counter;
}

// function makeAnagram(a, b) {
//     let counter = {};
//     let total = 0;
//     Array.from(a).forEach(char => {
//         counter[char] = counter[char] || 0;
//         counter[char]++;
//     })
//     Array.from(b).forEach(char => {
//         counter[char] = counter[char] || 0;
//         counter[char]--;
//     })
//     Object.keys(counter).forEach(k => {
//         if (counter[k] !== 0) {
//             total += Math.abs(counter[k]);
//         }
//     })

//     return total;
// }