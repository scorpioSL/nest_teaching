"use strict";
function isPalindrome(x) {
    let stringNumber = x.toString();
    if (stringNumber === stringNumber.split('').reverse().join(''))
        return true;
    else
        return false;
}
console.log(isPalindrome(121), 121);
console.log(isPalindrome(-121), -121);
console.log(isPalindrome(10), 10);
console.log(isPalindrome(-101), -101);
