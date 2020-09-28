function checkPalindrome() {
    let word = "arara";
    let palindrome = "";
    for (let i=1; i <= word.length; i++){
        palindrome = palindrome.push(word[word.length - i])
        console.log(palindrome);
    }
}
console.log(checkPalindrome());