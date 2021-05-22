
function reverse(x: number): number {
    if (x == 0) return 0;
    let numberString = x.toString();
    if (x < 0) return parseInt(numberString[0] + (numberString.split('').reverse().join('')));
    else return parseInt(numberString.split('').reverse().join(''));
}

console.log(reverse(321),321);
console.log(reverse(0),0);
console.log(reverse(123),123);
console.log(reverse(-123),-123);
console.log(reverse(+125),+125);
console.log(reverse(1350),1350);
