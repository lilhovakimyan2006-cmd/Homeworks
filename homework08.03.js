// task 1

// function forEach ( array, callback ) {
//     for ( let i = 0; i < array.length; ++i ) {
//         callback ( array[i], i, array );
//     }
// }

// function call ( currentValue, index, arr ) {
//     console.log ( currentValue, index, arr );
// }

// let array = [1, 2, 3];
// forEach ( array, call );

// task 2

// function map ( array, callback ) {
//     let result = [];

//     for ( i = 0; i < array.length; ++i ) {
//         result.push ( callback ( array[i], i, array ) );
//     }
//     return result;
// }

// function call ( currentValue, index, arr ) {
//     return currentValue * 2;
// }

// let array = [3, 7, 6];
// let newArray = map ( array, call ); 
// console.log ( newArray );

// task 3

// function filter ( array, callback ) {
//     let res = [];
//     for ( let i = 0; i < array.length; ++i ) {
//         if ( callback ( array[i], i, array ) ) {
//             res.push ( array[i] );
//         } 
//     }
//     return res;
// }

// function call ( currentValue, index, array ) {
//     return currentValue > 10;
// }

// let array = [2, 65, 34, 5, 12];
// let newArray = filter ( array, call );
// console.log ( newArray );

// task 4

// function some ( array, callback ) {
//     for ( let i = 0; i < array.length; ++i ) {
//         if ( callback ( array[i], i, array ) ) {
//             return true;
//         } 
//     }
//     return false; 
// }

// function call ( currentValue, index, array ) {
//     return currentValue > 0;
// }

// let array = [-12, -6];
// let newRes = some ( array, call );
// console.log ( newRes );

// task 5

// function every ( array, callback ) {
//     for ( let i = 0; i < array.length; ++i ) {
//         if ( ! callback ( array[i], i, array ) ) {
//             return false;
//         }
//     }
//     return true;
// }

// function call ( currentValue, index, array ) {
//     return currentValue < 0;
// }

// let array1 = [12, 6];
// let array2 = [-12, -6];
// console.log ( every ( array1, call ) );
// console.log ( every ( array2, call ) );

// task 6

// function indexOf ( array, callback ) {
//     for ( let i = 0; i < array.length; i++ ) {
//         if ( callback ( array[i], i, array ) ) { 
//             return i; 
//         }
//     }
//     return -1; 
// }

// function call ( num ) {
//     return function ( element ) {
//         return element === num;
//     };
// }

// let array = [1, 4, 7];
// let num = 4;

// let index = indexOf ( array, call ( num ) );
// console.log ( index ); 