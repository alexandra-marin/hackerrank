// #1
// Time limit exceeded
// function substrCount(n, s) {
//     let counter = 0;

//     for (var i = 1; i <= s.length; i++) {
//         for (var ind = 0; ind <= s.length - i; ind++) {
//             let sub = s.substring(ind, ind + i);

//             if(sub.length % 2 === 1) {
//                 sub = sub.slice(0, Math.floor(sub.length/2)) 
//                     + sub.slice(Math.ceil(sub.length/2))
//             }

//             var compare = sub[0];
//             var check = true;
//             for (var j = 1; j <= sub.length - 1; j++) {
//                 if(sub[j] !== compare)
//                     check = false;
//             }
//             if(check) counter++;
//         }
//     }
//     return counter;
// }

// #2
function substrCount(n, s) {
    let counter = n; // all one letter combos by default

    for (var i = 0; i < n; i++) {
        //Part-1: Odd Number palindromes
        // in 'aabaa', i = 2
        // check 'AbA', then
        // check AabaA, etc
        let start = i - 1, end = i + 1, first = s[i - 1];
        while (start >= 0 && end < n) {
            if (s[start] === first && s[end] === first) {
                counter++;
                start--;
                end++;
            } else {
                break;
            }
        }

        //Part-2: Even Number repetitions
        // 7 occurences -> 7 / 2 = 3 possible strings (a, aa, aaa)
        let k = 1;
        while (s[i + k] === s[i] && (i + k) <= n) {
            k++
        }
        counter += Math.floor(k / 2);
    }
    return counter;
}