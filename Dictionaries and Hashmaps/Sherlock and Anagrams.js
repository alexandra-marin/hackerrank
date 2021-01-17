// function sherlockAndAnagrams(s) {
//     let counter = 0;
//     const length = s.length;

//     // substrings have min size is 1 and max size word length - 1
//     for (var i = 1; i <= length - 1; i++) {
//         let substrings = [];
//         for (var ind = 0; ind <= s.length - i; ind++) {
//             let sub = s.substring(ind, ind + i);
//             substrings.push(sub);
//         }

//         for (var j = 0; j <= substrings.length - 1; j++) {
//             let word1 = substrings[j];
//             for (var k = j + 1; k <= substrings.length - 1; k++) {
//                 let word2 = substrings[k];

//                 let word1Map = new Map();
//                 word1.split('').forEach(letter => {
//                     let prevVal = word1Map.get(letter) || 0;
//                     word1Map.set(letter, prevVal + 1);
//                 });

//                 let word2Map = new Map();
//                 word2.split('').forEach(letter => {
//                     let prevVal = word2Map.get(letter) || 0;
//                     word2Map.set(letter, prevVal + 1);
//                 });

//                 let checked = [...word1Map.keys()].every(letter => {
//                     let keyFound = word2Map.has(letter);
//                     if (keyFound) {
//                         return word1Map.get(letter) === word2Map.get(letter);
//                     } else {
//                         return false;
//                     }
//                 });

//                 if (checked) counter++;
//             }
//         }
//     }

//     return counter;
// }

function sherlockAndAnagrams(s) {
    let counter = 0;
    const length = s.length;

    // substrings have min size is 1 and max size word length - 1
    for (var i = 1; i <= length - 1; i++) {
        let found = {};

        for (var ind = 0; ind <= s.length - i; ind++) {
            let sub = s.substring(ind, ind + i);
            let sorted = sub.split('').sort().join();
            console.log(sorted)
            if (found[sorted]) {
                // if there were 2 occurences - the pair [A, B]
                // add 2 to the counter when the third is found bc
                // the pairs now are [A, B], [A, C], [B, C]
                // ...
                // when the next occurence is found
                // add 3 to counter bc
                // D will form 3 new pairs with the existing occurences
                // [A, D], [B, D], [C, D]  
                // 
                // (also)
                // formula for combintions of 2 out of n
                // n(n - 1) / 2
                counter += found[sorted];
                found[sorted]++;
            } else {
                found[sorted] = 1;
            }
        }
    }

    return counter;
}
