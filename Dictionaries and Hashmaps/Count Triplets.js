// function countTriplets(arr, r) {
//     let counter = 0;

//     for (var i = 0; i < arr.length - 2; i++) {
//         for (var j = i + 1; j < arr.length - 1; j++) {
//             var one = arr[i];
//             var two = arr[j];
//             if (one * r === two) {
//                 for (var k = j + 1; k < arr.length; k++) {
//                     var three = arr[k];
//                     if (two * r === three) {
//                         counter++;
//                     }
//                 }
//             }
//         }
//     }

//     return counter;

// }

// function countTriplets(arr, r) {
//     let counter = 0;
//     let beforeMap = new Map();
//     let afterMap = new Map();

//     arr.map((x, i) => {
//         let prevVal = afterMap.get(arr[i]) || 0;
//         afterMap.set(arr[i], prevVal + 1);
//     });

//     for(var i = 0; i < arr.length; i++) {
//         let prevAfterVal = afterMap.get(arr[i + 1]) || 0;
//         afterMap.set(arr[i], prevAfterVal - 1);

//         var one = arr[i] / r;
//         var two = arr[i];
//         var three = arr[i] * r;

//         const foundOne = beforeMap.has(one) && (two % r == 0) && beforeMap.get(one) > 0;
//         const foundThree = afterMap.has(three) && afterMap.get(three) > 0;

//         if(foundOne && foundThree) {
//             counter += beforeMap.get(one) * afterMap.get(three);
//         }

//         let prevBeforeVal = beforeMap.get(arr[i]) || 0;
//         beforeMap.set(arr[i], prevBeforeVal + 1);
//     }

//     return counter;
// }

// ???
// arr = 1 4 16 64, n = 4

// i      n       rn        map2        map3        count
// 0      (1)      4        1 -> 0      
//                          4 -> 1      
// 1      4        16       4 -> 1      16 -> 1
//                          16 -> 1
// 2      16       64       16 -> 1     64 -> 1         1
// 3      64       256      256 -> 1                    2

function countTriplets(arr, r) {
    var map2 = {};
    var map3 = {};
    var count = 0;

    for (var i = 0; i < arr.length; ++i) {
        var n = arr[i];
        var rn = r * n;

        if (map3[n]) {
            count += map3[n];
        }

        if (map2[n]) {
            map3[rn] = map3[rn] ? map3[rn] + map2[n] : map2[n];
        }

        map2[rn] = map2[rn] ? map2[rn] + 1 : 1;
    }

    return count;
}