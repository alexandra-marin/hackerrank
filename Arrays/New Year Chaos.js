function minimumBribes(q) {
    // #1
    // for(var i = q.length-1; i >= 0; i--) {
    //     if(q[i] - (i+1) > 2) {
    //         switches = "Too chaotic";
    //         break;
    //     } else {
    //         // compare each number with what's on their back/left
    //         // to see how many they bribed
    //         // ex: 1 2 5 3 7 8 6 4
    //         // compare 5 with 3 7 8 6 4
    //         // results it skipped 3 and 4 -> 5 gave 2 bribes
    //         for(var j = Math.max(q[i]-2, 0) ; j< i; j--) {
    //             if(q[j] > q[i]) {
    //                 switches++;
    //             }
    //         }
    //     }
    // }
    // ind = 0     1       2        3      4       5      6        7      8
    // arr = 1     2       5        3      7       8      6        4      -
    // bc =  0     0       0        0      0       2      1        2       2

    // #2

    // i=0, val=1, bc[1]=0, high=1
    // i=1, val=2, bc[2]=0, high=2
    // i=2, val=5, bc[5]=0, high=5
    // i=3, val=3, bc[3]=0, high=5
    // j=4->8
    // i=4, val=7, bc[7]=0, high=7
    // i=5, val=8, bc[8]=0, high=8
    // i=6, val=6, bc[6]=0, high=8
    // j=7->8
    // i=7, val=4, bc[4]=0, high=8
    // j=5->8

    // var switches = 0;
    // let bribeCount = []
    // let high = 0;

    // for (let i = 0; i < q.length; i++) {
    //     let val = q[i]
    //     bribeCount[val] = 0
    //     high = Math.max(val, high)
    //     if (val < high) {
    //         for (let j=val+1; j < bribeCount.length; j++) {
    //             bribeCount[j]++
    //             if (bribeCount[j] > 2) {
    //                 console.log("Too chaotic")
    //                 return;
    //             }
    //         }
    //     }
    // }
    // const sum = bribeCount.reduce((a,b) => a + b, 0)  // sum
    // console.log(sum);

    // #3
    // To get to the current position, each person has to bribe all the people
    // who are behind them and have a smaller number.
    // This is the same as counting inversions of an array.
    // We start from the end of the array . If A[i] is not equal to i,
    // then we know that the last element must have bribed and moved towards the left
    // since it cannot move to the right being the last element. Also, we know that it will
    // be present either in position  i - 1 or i - 2. This is because if it is in the
    // position left to i - 2, he must have bribed more than 2 people. In that case, we just
    // print Too chaotic and terminate our program. Else if a[i] is equal to a[i - 1]
    // just swap the two elements and increment the counter by 1. Else shift a[i - 1] to
    // a[i - 2],  a[i] to a[i-1] and put a[i] equal to i and increment the counter by 2.
    // Repeat the process until we reach the start of the array.
    let count = 0;
    for (let i = q.length - 1; i > 0; i--) {
        const rightVal = i + 1;
        if (q[i] !== rightVal) {
            if (q[i - 1] === rightVal) {
                q[i - 1] = q[i];
                q[i] = rightVal;
                count++;
            } else if (q[i - 2] === rightVal) {
                q[i - 2] = q[i - 1];
                q[i - 1] = q[i];
                q[i] = rightVal;
                count += 2;
            } else {
                console.log('Too chaotic');
                return;
            }
        }
    }
    console.log(count);
}

minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
