function twoStrings(s1, s2) {
    let letterMap = {}
    s1.split('').reduce((acc, curr) => letterMap[curr] = true, {});
    let check = s2.split('').some(x => letterMap[x]);
    if (check) return "YES";
    return "NO";
}