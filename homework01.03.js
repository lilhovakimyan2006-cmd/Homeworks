//task 1

// function isEven ( num ) {
//     return num % 2 === 0 ? true : false;
// }

// var num = 876
// console.log( isEven ( num ) );

//task 2

// function sumUpTo ( num ) {
//     var sum = 0;
//     for ( var i = 1; i <= num; ++i ) {
//         sum += i;
//     }
//     return sum;
// }

// var num = 10;
// console.log( sumUpTo ( num ) ); 

//task 3

// function minInArray ( arr ) {
//     var min;
//     min = arr[0];
//     for ( var i = 0; i < arr.length; ++i ) {
//         if ( min > arr[i] ) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// var arr = [7];
// console.log ( minInArray ( arr ) );

//task 4

// function countDigit ( num ) {
//     var count = 0;
//     while ( num ) {
//         var digit = num % 10;
//         count++;
//         num = ( num - digit ) / 10;
//     }    
//     return count;
// }

// var num = -98;
// console.log( countDigit ( num ) );

//task 5

// function sumArray ( arr ) {
//     var sum = 0;
//     for ( var i = 0; i < arr.length; ++i ) {
//         sum += arr[i];
//     }
//     return sum;
// }

// var arr = [5];
// console.log( sumArray ( arr ) );

//task 6

// function average ( arr ) {
//     var count = 0;
//     var sum = 0;
//     for ( var i = 0; i < arr.length; ++i ) {
//         sum += arr[i];
//         count++;
//     }
//     return sum / count;
// }

// var arr = [2, 4, 6]
// console.log ( average ( arr ) );

//task 7

// function countChar ( str, char ) {
//     var count = 0;
//     for ( let elem of str ) {
//         if ( elem === char ) {
//             count++;
//         }
//     } 
//     return count;
// }

// var str = "abc";
// var char = "d";
// console.log ( countChar ( str, char ) );

//task 8

// function removefirstChar ( str ) {
//     var new_str = "";
//     for ( var i = 0; i < str.length - 1; ++i ) {
//         new_str += str[i + 1];
//     }
//     return new_str;
// }

// var str = "hello";
// console.log ( removefirstChar ( str ) );

//task 9

// function power ( base, exp ) {
//     var sum = 1;
//     for ( var i = 0; i < exp; ++i ) {
//         sum *= base;
//     }
//     return sum;
// }

// var base = 3;
// var exp = 2;
// console.log ( power ( base, exp ) );

//task 10 

// function contains ( arr, value ) {
//     var given;
//     for ( var i = 0; i < arr.length; ++i ) {
//         if ( arr[i] === value ) {
//             given = arr[i];
//         }
//     }
//     return given ? true : false;
// }

// var arr = [];
// var value = 1;
// console.log ( contains ( arr, value ) );

//task 11

// function repeatString ( str, n ) {
//     var new_str = "";
//     for ( var i = 0; i < n; ++i ) {
//         new_str += str; 
//     }
//     return new_str;
// }

// var str = "xi";
// var n = 3;
// console.log ( repeatString ( str, n ) );

//task 12

// function firstAndLast ( arr ) {
//     if ( arr.length === 0 ) {
//         return [];
//     }
//     return [arr[0], arr[arr.length - 1]];
// }

// var arr = [];
// console.log ( firstAndLast ( arr ) );