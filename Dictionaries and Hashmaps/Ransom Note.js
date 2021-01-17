// function checkMagazine(magazine, note) {
//     let magazineMap = {};
//     magazine.forEach(word => {
//         const lastVal = magazineMap[word] || 0;
//         magazineMap[word] = lastVal + 1;
//     });

//     let check = note.every(word => {
//         if (magazineMap[word]) {
//             if (magazineMap[word] == 1) {
//                 delete magazineMap[word];
//             } else {
//                 magazineMap[word] -= 1;
//             }
//             return true
//         }
//         return false;
//     });

//     if (!check) {
//         console.log("No");
//     } else {
//         console.log("Yes");
//     }
// }

// make 2 maps to iterate less...
function checkMagazine(magazine, note) {
    let magazineMap = new Map();
    magazine.forEach(word => {
        let prevVal = magazineMap.get(word) || 0;
        magazineMap.set(word, prevVal + 1);
    });

    let noteMap = new Map();
    note.forEach(word => {
        let prevVal = noteMap.get(word) || 0;
        noteMap.set(word, prevVal + 1);
    });

    // 'every' stops checking after the first false return
    // (also: 'some' stops execution after the first true)
    let check = [...noteMap.keys()].every(word => {
        let keyFound = magazineMap.has(word);
        if (keyFound) {
            return magazineMap.get(word) >= noteMap.get(word);
        } else {
            return false;
        }
    });

    if (!check) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}