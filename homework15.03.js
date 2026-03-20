// task 1

// function curry(cb) {
//     return function curried (...arg) {
//         if ( arg.length >= cb.length ) {
//             return cb(...arg);
//         } else {
//             return function (...moreArg) {
//                 return curried (...arg, ...moreArg);
//             };
//         } 
//     };
// }

// const sum = (a, b, c) => a + b + c;
// const product = (a, b, c, d) => a * b * c * d;

// const sumFunc = curry(sum);
// const prodFunc = curry(product);

// console.log(sumFunc(1)(2, 3)); //6
// console.log(sumFunc(1, 2)(3)); //6
// console.log(sumFunc(1, 2, 3));   //6
// console.log(prodFunc(1, 2, 3, 4));   //24
// console.log(prodFunc(1)(2, 3, 4));   //24
// console.log(prodFunc(1, 2)(3, 4));   //24
// console.log(prodFunc(1, 2, 3)(4));   //24

// task 2

// function factorial(a) {
//  let res = 1;
//  for (let i = 2; i <= a; ++i) {
//    res *= i;
//  }
//  return res;
// }

// function memoize(cb) {
//     const cache = {};

//     return function (arg) {
//         if ( cache[arg] ) {
//             return cache[arg];
//         } 
//     cache[arg] = cb(arg);
//     return cache[arg];
//     };
// }

// const foo = memoize(factorial);
// console.log(foo(5)); // 120
// console.log(foo(5)); // 120

// task 3

// function pipe(...funcs) {
//     return function (arg) {
//         let res = funcs.reduce((result, func) => {
//             return func(result);
//         }, arg )
//         return res;
//     };
//  }

// const add5 = a => a + 5;
// const double = a => 2 * a;
// const sub4 = a => a - 4;

// const func = pipe(add5, add5, double, sub4); // 20
// console.log(func(2));

// task 4

// function trace(cb) {
//   function wrapper(...args) {
//     const output = cb(...args);
//     wrapper.history.push({ args, output });
//     return output;
//   }
//   wrapper.history = [];
//   return wrapper;
// }

// function foo(a, b) {
//  return a + b;
// }

// const tracedFunc = trace(foo);
// console.log(tracedFunc(1, 2)); //3
// console.log(tracedFunc(2, 4, 6)); //6

// console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]