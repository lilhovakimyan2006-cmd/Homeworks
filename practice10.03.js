// task 1

// let person1 = { name: "John", surname: "Smith", age: 45 };
// let person2 = { name: "Tom", surname: "Smith", age: 40 };

// let mergedPerson = Object.assign ( {}, person1, person2 );
// console.log( mergedPerson );

// task 2 

// let student = { name: "Ana", surname: "Adams", grade: 93 };
// Object.freeze ( student );
// student.name = "Marie";
// console.log ( student );

// task 3

// let obj = {};
// let num = 8;
// if ( num ) {
//     Object.assign ( obj, { num } );
// }
// console.log( obj );

// task 4

// let arr = [ "name", "age", "city" ];
// let obj = {};
// for (let i of arr ) {
//     obj[i] = "something"; 
// }
// console.log ( obj );

// task 5

// let obj = { a: 3, b: 5, c: 23 };
// for ( let key of Object.keys( obj ) ) {
//     console.log ( obj [key] );
// }

// task 6

// let obj = { a: 5, b: 12, c: 8, d: 20 };
// let entries = Object.entries(obj);
// let newObj = {};
// for (let pair of entries) {
//     if (pair[1] > 10) {
//         newObj[pair[0]] = pair[1];
//     }
// }
// console.log(newObj);

// task 7

// function isEqual ( obj1, obj2 ) {
//     return JSON.stringify ( obj1 ) === JSON.stringify ( obj2 );
// }

// let obj1 = { x: 10, y: 20 };
// let obj2 = { x: 10, y: 20 };
// let obj3 = { x: 10, y: 25 };

// console.log ( isEqual ( obj1, obj2 ));
// console.log ( isEqual ( obj2, obj3 ));