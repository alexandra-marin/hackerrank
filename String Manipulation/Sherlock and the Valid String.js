// incomplete
// function isValid(s) {
//     let aMap = new Map();
//     s.split('').forEach(word => {
//         let prevVal = aMap.get(word) || 0;
//         aMap.set(word, prevVal + 1);
//     });

//     let freqMap = new Map();
//     [...aMap.values()].forEach(word => {
//         let prevVal = freqMap.get(word) || 0;
//         freqMap.set(word, prevVal + 1);
//     });

//     if (freqMap.size > 2) return "NO"
//     if (freqMap.size === 2) {
//         var [val1, val2] = [...freqMap.values()];

//         if (!(val1 === 1 || val2 === 1))
//             return "NO";

//         var [k1, k2] = [...freqMap.keys()];
//         if (Math.abs(k1 - k2) !== 1)
//             return "NO";
//     }

//     return "YES";
// }


// [Map Iterator] {
//     [ 'i', 111 ],
//     [ 'b', 111 ],
//     [ 'f', 111 ],
//     [ 'd', 111 ],
//     [ 'g', 111 ],
//     [ 'a', 111 ],
//     [ 'e', 111 ],
//     [ 'h', 111 ],
//     [ 'c', 111 ],
//     [ 'n', 1 ] }
//   2
//   [Map Iterator] { 111, 1 } key
//   [Map Iterator] { 9, 1 } val

//   [Map Iterator] {
//     [ 'a', 2 ],
//     [ 'b', 2 ],
//     [ 'c', 2 ],
//     [ 'd', 2 ],
//     [ 'e', 3 ],
//     [ 'f', 2 ],
//     [ 'g', 2 ],
//     [ 'h', 2 ] }
//   2
//   [Map Iterator] { 2, 3 } key 
//   [Map Iterator] { 7, 1 } val

//aaaabbcc - 4 x a, 2 x b, 2 x c
//keys 4, 2
//values 1, 2

function isValid(s) {
    let aMap = new Map();
    s.split('').forEach(letter => {
        let prevVal = aMap.get(letter) || 0;
        aMap.set(letter, prevVal + 1);
    });

    let freqMap = new Map();
    [...aMap.values()].forEach(length => {
        let prevVal = freqMap.get(length) || 0;
        freqMap.set(length, prevVal + 1);
    });

    if (freqMap.size < 2) return "YES"
    if (freqMap.size > 2) return "NO"
    if (freqMap.size === 2) {
        var [v1, v2] = [...freqMap.values()];
        var [k1, k2] = [...freqMap.keys()];

        let maxKey = Math.max(k1, k2)
        let minKey = Math.min(k1, k2)

        // case 1: can remove 1 letter from the greater word
        // [Map Iterator] { 2, 3 } key 
        // [Map Iterator] { 7, 1 } val
        if (maxKey - minKey == 1 && freqMap.get(maxKey) == 1) {
            return "YES"
        }
        else {
            // case 2: there is exactly 1 word of 1 leter
            //   [Map Iterator] { 111, 1 } key
            //   [Map Iterator] { 9, 1 } val
            if (minKey == 1 && freqMap.get(minKey) == 1)
                return "YES"
        }
    }

    return "NO";
}