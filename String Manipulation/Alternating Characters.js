function alternatingCharacters(s) {
    var ctr = 0;
    var str = s.split('');
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) ctr++
    }
    return ctr;
}