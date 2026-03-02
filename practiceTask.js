//task 1

// function lengthOfArray(str) {
//     return str.length;
// }

// console.log(lengthOfArray("Hello world!"));


// task 2

// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// console.log(toUpperCase("hello world"));

//task 3

// function sum(a, b) {
//     return a+b;
// }
// console.log(sum(12, 15));

//task 4

// function reverseString(str) {
//     let res = "";
//     for (let elem of str) {
//         res = elem + res;
//     }
//     return res; 
// }
// console.log(reverseString("Hello"));

//task 5

// function checkTheString(str) {
//     return str.includes("Java") ? true : false;
// }
// console.log(checkTheString("Learning JavaScript"));

//task 6

// function findIndex(arr) {
//     return arr.indexOf(9);
// }
// console.log(findIndex([3, 6, 9, 12]));

// task 7

// let expenses = [50, 75, 100];
// let sum = 0;
// for (let elem of expenses) { sum += elem; }
// console.log(sum);

// task 8

// function checkSubStringInString(str, subStr) {
//     return str.includes(subStr) ? true : false;
// }

// console.log(checkSubStringInString("hello world!", "world"));

// task 9

// function evenOrOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(evenOrOdd(17));

// task 10

// function customTypeOf(argument) {
//     let type = typeof argument;

//     if (!argument && type === "object"){
//         return "object";
//     } else if (type === "undefined") { return type; }

//     return argument.constructor.name.toLowerCase();
// }

// console.log(customTypeOf(null));

// task 11

// function isTrue(arg) {
//     return arg ? false : true;
// }

// console.log(isTrue(12));

// task 12

// function looseObject(val1, val2) {
//     return {
//         "loose": val1 == val2,
//         "strict": val1 === val2
//     };
// }

// console.log(looseObject(12, "12"));

// task 13

// function isTrueInt(number) {
//     return (!Number.isNaN(number) && Number.isFinite(number) && Number.isSafeInteger(number)) ? true : false;
// }

// console.log(isTrueInt(100));

// task 14

// function convertToNum(value) {
//     return Number.isNaN(Number(value)) ? null : Number(value);
// }

// console.log(convertToNum("4654"));

// task 15

// function convertToBolean(value) {
//     return Boolean(value);
// }

// console.log(convertToBolean(undefined));

// task 16

// function isObject(arg) {
//     return arg !== null && typeof arg === arg === "object" ? true : false;
// }

// console.log(isObject(undefined));

// task 17

// function isPrimitive(arg) {
//     return arg === null || ( typeof arg !== "object" && arg !== "function" ) ? false : true;
// }

// console.log(isPrimitive(12));

// task 18

// function sumOfNumbers(num1, num2) {
//     return (typeof num1 === "number" && typeof num2 === "number" && !Number.isNaN(num1) && !Number.isNaN(num2) && Number.isFinite(num1) && Number.isFinite(num2)) ? num1 + num2 : "Invalid input";
// }

// console.log(sumOfNumbers(12, "12"));