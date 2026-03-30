// Function.prototype.myCall = function myCall (thisobj, ...args) {
//     const newThis = thisobj ?? globalThis;
//     let sym = Symbol();
//     newThis[sym] = this;
//     let res = newThis[sym](...args);
//     delete newThis[sym];
//     return res;
// }

// function foo() {
//     console.log(this.name + ' is' + ' ' + this.age);
// }

// let obj = {
//     name: "John",
//     age: 42
// };

// foo.myCall(obj)

// Function.prototype.myApply = function myApply (thisobj, args) {
//     const newThis = thisobj ?? globalThis;
//     let sym = Symbol();
//     newThis[sym] = this;
//     let res = newThis[sym](...args);
//     delete newThis[sym];
//     return res;
// }

// function foo(a, b, c) {
//     console.log(a, b, c);
//     console.log(this.name);
// }

// let obj = {
//     name: "John"
// };

// foo.myApply(obj, [1, 2, 3]);

// Function.prototype,myBind = function myBind (thisobj, ...args) {
//     const newthis = thisobj ?? globalThis;
//     newthis = this;
//     return function (...newArgs) {
//         return newthis.apply([...args, ...newArgs]);
//     }
// }

// function greet() {
//     console.log(this.name);
// }

// const person = { 
//     name: "John"
// };

// const Greet = greet.bind(person);
// Greet(); 