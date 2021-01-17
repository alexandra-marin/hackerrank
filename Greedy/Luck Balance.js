function luckBalance(k, contests) {
    let notImportant = contests.filter(([, important]) => !important);
    let important = contests
        .filter(([, important]) => important)
        .sort((a, b) => b[0] - a[0]);
    let mostImportantK = important.filter((x, i) => i < k);
    let importantWon = important.filter((x, i) => i >= k);

    return mostImportantK.reduce((acc, [luck]) => acc + luck, 0) +
        notImportant.reduce((acc, [luck]) => acc + luck, 0) -
        importantWon.reduce((acc, [luck]) => acc + luck, 0)
}