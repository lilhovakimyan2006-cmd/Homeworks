//task 1

// function isPrime (num) {
//     if ( num === 2 ) return true;
//     if ( num <= 1 && num % 2 === 0 ) return false;
//     var count = 0;
//     for ( var i = 3; i <= num; i += 2 ) {
//         if ( num % i === 0 ) {
//             count++;
//         }
//     }
//     return count === 1 ? true : false;
//     }

// var num = 29
// console.log(isPrime(num));

//task 2

// function isPolindrom(str) {
//         var x = "";
//         if(str == x) {
//                 return true;
//         }
//         var a = "";
//         for(var i = str.length - 1; i >= 0; --i){
//                 a += str[i];
//         }
//         if(a == str){
//                 return true;
//         }
//         return false;
// }


// let str1 = "hello";
// let str = "level";
// console.log(isPolindrom(str));
// console.log(isPolindrom(str1));

//task 3

// function factorial (num) {
//     if ( num < 0 ) return false;
//     if ( num === 0 ) return 1;
//     var res = 1;
//     for ( var i = 1; i <= num; ++i ) {
//         res *= i;
//     }
//     return res;
// }

// var num = 6;
// console.log(factorial(num));

//task 4

// function maxInArray (arr) {
//     var max;
//     max = arr[0];
//     for ( var i = 0; i < arr.length; ++i ) {
//         if ( max < arr[i] ) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// var arr = [10,2,8]
// console.log(maxInArray(arr));

//task 5

// function sumDigits (num) {
//     var sum = 0;
//     if ( num < 0 ) {
//         num = -num;
//     }

//     while ( num ) {
//         var digit = num % 10;
//         sum += digit;
//         num = ( num - digit ) / 10 
//     }
//     return sum;
// }

// var num = -26;
// console.log(sumDigits(num));

//task 6

// function reverseNumber(num) {
//     var res = 0;
//     while (num) {
//         var digit = num % 10;
//         res = ( res * 10 ) + digit;
//         num = ( num - digit ) / 10;
//     }
//     return res;
// }

// var num = 345;
// console.log(reverseNumber(num));

//task 7

// function countVowels(str) {
//     var count = 0;
//     for ( let elem of str ) {
//         if ( elem == 'a' || elem == 'e' || elem == 'i' || elem == 'o' || elem == 'u' ) {
//             count++
//         }
//     }
//     return count;
// }

// var str = "endou"
// console.log(countVowels(str));

//task 8

// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     var prev = 0;
//     var curr = 1;

//     for (var i = 2; i <= n; i++) {
//         var next = prev + curr;
//         prev = curr;
//         curr = next;
//     }

//     return curr;
// }

// console.log(fib(0));  
// console.log(fib(1));  
// console.log(fib(1000));

//task 9

// function almostEqual(a, b) {
//     const epsilon = 0.000001; 
//     return Math.abs(a - b) < epsilon;
// }

// console.log(almostEqual(0.1 + 0.2, 0.3)); 
// console.log(almostEqual(0.3 - 0.2, 0.1)); 
// console.log(almostEqual(0.1 + 0.2, 0.4)); 

// task 10
 
// function toNumberOrNull ( value ) {
//     var num = Number ( value );
//     return isNaN ( value ) ? null : num;
// }

// var value = "Hello"
// console.log(toNumberOrNull(value));

// task 11

// function exactType ( value ) {
//     if ( value === null ) return "null";
//     if ( Array.isArray( value ) ) return "array";
//     if ( typeof value === "function" ) {
//         return "function";
//     }
//     else return typeof value;
// }

// var value = [1,2,3];
// console.log(exactType(value));

// task 12

// function toBoolean ( value ) {
//     return value ? true : false;
// }

// var value = 3
// console.log(toBoolean(value));


// task 13

// function isPrimitive ( value ) {
//     if (( typeof value !== "function" && typeof value !== "object" ) || value === null ){
//         return true;
//     }
//     return false;
// }

// var value = {};
// console.log(isPrimitive(value));

//task 14

// function isArray(value) {
//     if ( value === null ) return false;
//     if ( typeof value !== "object" ) return false;

//     if ( typeof value.length !== "number" ) return false;
//     if ( value.length < 0 ) return false;

//     if ( value.length > 0 && !( value.length - 1 in value ) ) {
//         return false;
//     }
//     return true;
// }

// var value = [1,2,3];
// console.log(isArray(value));