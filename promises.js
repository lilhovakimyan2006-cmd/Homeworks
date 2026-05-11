// task 1
// setTimeout(() => console.log("Hello after 2 seconds"), 2000);

// task 2
// function foo(n) {
//     if ( n > 0) {
//         setTimeout(function() {
//             console.log(n);
//             foo(n-1);
//         }, 1000);
//     } else {
//         setTimeout(() => console.log("Go!"), 1000)
//     }
// }

// foo(5);

// // task 3
// let id = setTimeout(() => console.log("Executed"), 5000);
// setTimeout(function() {
//     clearTimeout(id);
//     console.log("Timeout cleared")
// }, 2000)

// task 4
// function printNumbers(num, start = 1) {
//     if(num > 0) {
//         setTimeout(function() {
//             console.log(start);
//             printNumbers(num - 1, start + 1);
//         }, 1000)
//     }
// }

// printNumbers(7);

// task 5
// console.log("Start");

// setTimeout(() => {
//  console.log("Timeout");
// }, 0);

// console.log("End");
/* 
Start
End
Timeout
*/

// task 6
// setTimeout(() => console.log("A"), 1000);

// setTimeout(() => console.log("B"), 0);

// console.log("C");
/*
C
B
A
*/

// task 7
// function delay(message, time) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);
//     });
// }

// delay("Hello", 3000);

// task 8
// let myPromise = new Promise ((resolve, reject) => {
//     resolve("Data loaded");
// });

// myPromise.then((message) => console.log(message));

// task 9
// let myPromise = new Promise ((resolve, reject) => {
//     reject("Server Error");
// });

// myPromise.catch((error) => console.log(error));

// task 10
// function pay(balance, amount) {
//     return new Promise ((resolve, reject) => {
//         if (amount <= balance) {
//             resolve("Payment succesful");
//         } else {
//             reject("Not enough money"); 
//         }
//     });
// }

// pay(1000, 3000)
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));

// task 11
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User loaded");

//             resolve({
//                 id: 1,
//                 name: "John"
//             });
//         }, 1000);
//     });
// }

// function getPosts(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Posts loaded for ${user.name}`);

//             resolve([
//                 { id: 101, title: "My first post" },
//                 { id: 102, title: "Post is fun" }
//             ]);
//         }, 1000);
//     });
// }

// function getComments(posts) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Comments loaded");

//             resolve([
//                 { postId: 101, text: "Amazing post!" },
//                 { postId: 102, text: "Very helpful!" }
//             ]);
//         }, 1000);
//     });
// }

// getUser()
//     .then(getPosts)
//     .then(getComments)
//     .then((comments) => {
//         console.log("Final comments:", comments);
//     });


// task 12
// console.log("1");

// setTimeout(() => {
//  console.log("2");
// }, 0);
// Promise.resolve().then(() => {
//  console.log("3");
// });

// console.log("4");
// // 1 4 3 2

// task 13
// console.log("A");

// Promise.resolve().then(() => {
//  console.log("B");
// });

// Promise.resolve().then(() => {
//  console.log("C");
// });

// setTimeout(() => {
//  console.log("D");
// }, 0);

// console.log("E");
// // A E B C D

// task 14
// console.log("Start");

// setTimeout(() => {
//  console.log("Timeout 1");

//  Promise.resolve().then(() => {
//    console.log("Promise inside timeout");
//  });
// }, 0);

// Promise.resolve().then(() => {
//  console.log("Promise 1");
// });

// setTimeout(() => {
//  console.log("Timeout 2");
// }, 0);

// console.log("End");
// /*
// Start
// End
// Promise 1
// Timeout 1
// Promise inside timeout
// Timeout 2
// */

// task 15
// function delay(color, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(color);
//             resolve();
//         }, time);
//     });
// }

// function redLight() {
//     return delay('🔴', 3000);
// }

// function yellowLight() {
//     return delay('🟡', 1000);
// }

// function greenLight() {
//     return delay('🟢', 2000);
// }

// async function trafficLight() {
//     while(true) {
//         await redLight();
//         await yellowLight();
//         await greenLight();
//     }
// }
// trafficLight();

// task 16
// function downloadFile() {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             console.log('File downloaded');
//             resolve()
//         }, 2000)
//     });
// }

// function resizeImage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Image resized');
//             resolve();
//         }, 2000); 
//     });
// }

// function uploadFile() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('File uploaded');
//             resolve();
//         }, 2000);
//     });
// }

// downloadFile()
// .then(() => resizeImage())
// .then(() => uploadFile())
// .then(() => console.log('All done'));

//bonus task
// function wait(time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     })
// }

// wait(2000).then(() => {
//  console.log("Done");
// });

//Hard challenge
// console.log("1");

// setTimeout(() => {
//  console.log("2");

//  Promise.resolve().then(() => {
//    console.log("3");
//  });

// }, 0);

// Promise.resolve().then(() => {
//  console.log("4");
// });

// console.log("5");

// setTimeout(() => {
//  console.log("6");
// }, 0);
// /*
// 1
// 5
// 4
// 2
// 3
// 6
// */