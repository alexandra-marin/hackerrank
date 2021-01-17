// Operation   Array   Output
// (1,1)       [1]
// (2,2)       [1]
// (3,2)                   0
// (1,1)       [1,1]
// (1,1)       [1,1,1]
// (2,1)       [1,1]
// (3,2)                   1
// Return an array with the output: [0, 1]

// function freqQuery(queries) {
//     let reply = [];
//     let data = new Map();
//     queries.map(([op, num]) => {
//         if (op === 1) {
//             let prevVal = data.get(num) || 0;
//             data.set(num, prevVal + 1);
//         }
//         if (op === 2) {
//             let hasVal = data.has(num);
//             if (hasVal) {
//                 let prevVal = data.get(num) || 0;
//                 if (prevVal) {
//                     data.set(num, prevVal - 1);
//                 } else {
//                     data.delete(num);
//                 }
//             }
//         }
//         if (op === 3) {
//             if ([...data.values()].includes(num)) {
//                 reply.push(1)
//             } else {
//                 reply.push(0)
//             }
//         }
//     });
//     return reply
// }

// now with map for frequencies
function freqQuery(queries) {
    let reply = [];
    let data = new Map();
    let freqencies = [];

    queries.map(([op, num]) => {
        let prevVal = data.get(num) || 0;
        let prevFreq = freqencies[prevVal] || 0;
        let prevFreqP = freqencies[prevVal + 1] || 0;
        let prevFreqM = freqencies[prevVal - 1] || 0;

        if (op === 1) {
            data.set(num, prevVal + 1);

            freqencies[prevVal + 1] = prevFreqP + 1
            freqencies[prevVal] = prevFreq - 1
        }

        if (op === 2) {
            if (prevVal && prevVal > 0) {
                data.set(num, prevVal - 1);

                freqencies[prevVal - 1] = prevFreqM + 1
                freqencies[prevVal] = prevFreq - 1
            }
        }

        if (op === 3) {
            if (freqencies[num]) {
                reply.push(1)
            } else {
                reply.push(0)
            }
        }
    });
    return reply
}