// task 1

// function getUniqueUsers (users) {
//     let map = new Map();

//     for (let user of users) {
//         if (!map.has(user.id)) {
//             map.set(user.id, user)
//         }
//     }
//     return Array.from(map.values());
// }

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Anna' },
//   { id: 1, name: 'John' } 
// ];

// console.log(getUniqueUsers(users));

// task 2

// function mapToJson(map) {
//     return JSON.stringify(Array.from(map.entries()));
// }

// function jsonToMap(jsonStr) {
//     let arr = JSON.parse(jsonStr);
//     return new Map(arr);
// }

// const myMap = new Map([['a', 1], ['b', 2]]);

// const jsonStr = mapToJson(myMap);
// console.log(jsonStr);

// const restoredMap = jsonToMap(jsonStr);
// console.log(restoredMap); 


// task 3

// function groupByGroup(students) {
//     let map = new Map();

//     for (let student of students) {
//         if (!map.has(student.group)) {
//             map.set(student.group, [student.name]);
//         } 
//         else {
//             map.get(student.group).push(student.name);
//         }
//     }
//     return map;
// }

// const students = [
//   { name: 'John', group: 'A' },
//   { name: 'Anna', group: 'B' },
//   { name: 'Max', group: 'A' }
// ];

// console.log(groupByGroup(students));


// task 4

// let likemap = new WeakMap();

// function addLike(post, user) {
//     if (!likemap.has(post)) {
//         likemap.set(post, []);
//     }
//     likemap.get(post).push(user);
// }

// function getLikes(post) {
//     return likemap.get(post) || [];
// }

// let post1 = { title: 'JS is awesome' };
// let post2 = { title: 'Node.js event loop' };

// addLike(post1, 'John');
// addLike(post1, 'Anna');

// console.log(getLikes(post1)); // ['John', 'Anna']
// console.log(getLikes(post2)); // [] or undefined


// task 5

// function filterSpam(text, badWordsArray) {
//     let set = new Set(badWordsArray);

//     let words = text.split(" ");

//     let filteredWords = words.map(word => {
//         if (set.has(word)) {
//             return "***";           
//         } else {
//             return word;    
//         }
//     });
//     return filteredWords.join(" ");
// }

// const text = "buy our new cheap product";
// const badWords = ["cheap", "buy"];

// console.log(filterSpam(text, badWords));
// // "*** our new *** product"


// task 6

// function intersection(set1, set2) {
//     let set = new Set();

//     for (let item of set1) {
//         if (set2.has(item)) {
//             set.add(item);
//         }
//     }
//     return set;
// }

// function difference(set1, set2) {
//     let set = new Set();

//     for (let item of set1) {
//         if (!set2.has(item)) {
//             set.add(item);
//         }
//     }
//     return set;
// }

// const setA = new Set(['reading', 'games', 'music']);
// const setB = new Set(['games', 'sports']);

// console.log(intersection(setA, setB)); 
// // Set(1) { 'games' }

// console.log(difference(setA, setB)); 
// // Set(2) { 'reading', 'music' }


// task 7

// const set = new WeakSet();

// function processNotification(notif) {
//     if (set.has(notif)) {
//         return ("Already processed, ignoring");
//     }

//     set.add(notif);

//     return (`Processed: ${notif.text}`);
// }

// const notif1 = { id: 1, text: 'Message 1' };
// const notif2 = { id: 2, text: 'Message 2' };

// console.log(processNotification(notif1)); // "Processed: Message 1"
// console.log(processNotification(notif1)); // "Already processed, ignoring"
// console.log(processNotification(notif2)); // "Processed: Message 2"


// task 8

// let map = new WeakMap();

// function heavyCalc(obj) {
//     if (map.has(obj)) {
//         return map.get(obj);
//     }

//     let res=0;
//     for(let i = 0; i < 1000000; i++){
//         res += i;
//     }

//     res = obj.value*10;
//     map.set(obj,res);
//     return res;
// }

// const dataObj = { value: 10 };

// console.log(heavyCalc(dataObj)); // 100
// console.log(heavyCalc(dataObj)); // 100


// task 9

// const mixedMap = new Map([
//   [1, 'num'],
//   ['str', 'text'],
//   [true, false]
// ]);

// const iterator = mixedMap.entries();
// let current = iterator.next();

// while (!current.done) {
//     const [key,value] = current.value;
//     if (typeof value === "string") {
//         console.log([key,value]);
//     }
//     current = iterator.next();
// }

// task 10

// const map = new WeakMap();

// function getStats(originalObj) {
//     return map.get(originalObj);
// }

// function trackAccess(obj) {
//     map.set(obj,0);
//     return new Proxy(obj, {
//         get(target,prop){
//             const count = map.get(target);
//             map.set(target,count+1);
//             return Reflect.get(target,prop);
//         }
//     })
// }
// const original = { a: 1, b: 2 };
// const proxy = trackAccess(original);

// console.log(proxy.a);
// console.log(proxy.b);
// console.log(proxy.a);
// console.log(getStats(original));