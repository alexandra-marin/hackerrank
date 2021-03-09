// Time limit exceeded
// function activityNotifications(expenditure, d) {
//     if (expenditure.length < d) {
//         return 0;
//     }

//     let counter = 0;
//     for (let day = 0; day < expenditure.length - d; day++) {
//         let daysCounted = expenditure
//             .filter((v, i) => i >= day && i < day + d)
//             .sort((a, b) => a - b);

//         let length = daysCounted.length;
//         let mean = length % 2 == 0 ?
//             (daysCounted[length / 2 - 1] + daysCounted[length / 2]) / 2 :
//             daysCounted[Math.floor(length / 2)];

//         if (expenditure[d + 1] > 2 * mean) {
//             counter++;
//         }
//         console.log(day, daysCounted, mean);
//     }

//     return counter;

// }