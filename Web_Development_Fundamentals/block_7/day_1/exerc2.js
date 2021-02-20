function getLongestWord(text) {
    const longestWord = text.split(' ').sort(function(a, b) {
        return b.length - a.length;
    })
    return longestWord[0];
}
