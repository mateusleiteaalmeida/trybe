// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const strL = str.toLowerCase();
    for (let i = 0; i < strL.length; i += 1) {
        if (strL[i] === 'a' || strL[i] === 'e' || strL[i] === 'i' || strL[i] === 'o' || strL[i] === 'u') {
            count += 1;
        }
    }
    return count;
}

module.exports = vowels;