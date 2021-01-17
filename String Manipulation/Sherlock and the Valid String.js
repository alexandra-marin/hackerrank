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