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
