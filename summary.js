// "this" binding
// task 1

// let obj = {
//     sum: function(a, b, c) {return a + b + c }
// }
// let arr = [10, 20, 30]
// console.log(obj.sum.apply(obj, arr));

// task 2

// function printResult() {
//  console.log(this.name + " scored " + this.score);
// }

// const student1 = { name: "Anna", score: 80 };
// const student2 = { name: "Mark", score: 95 };

// printResult.call(student1);
// printResult.apply(student2);

// task 3

// const user = {
//   name: "Alex",
//   greet() {
//     return "Hello " + this.name;
//   }
// };

// const admin = {
//   name: "Admin"
// };

// console.log(user.greet.call(admin));

// task 4

// const numbers = [5, 12, 8, 20, 3];
// console.log(Math.max.apply(null, numbers));

// task 5

// const obj1 = {
//  value: 10,
//  getValue() {
//    return this.value;
//  }
// };

// const obj2 = {
//  value: 50
// };

// console.log(obj1.getValue.call(obj2));

// task 6

// function total (a, b, c) {
//     return a+ b + c;
// }

// const args = [7, 8, 9];

// console.log(total.apply(null, args));

// task 7

// function show() {
// return this.name;
// }

// const obj = { name: "Test" };
// const bound = show.bind(obj);

// console.log(bound.call({ name: "Wrong" }));

// task 8

// function printResult() {
//     return `${this.name} has ${this.points} points`;
// }

// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };

// console.log(printResult.call(p1));
// console.log(printResult.call(p2));

// task 9

// function sum(a, b, c) {
//   return a + b + c;
// }

// function execute(fn, arr) {
//   return fn.call(null, ...arr);
// }

// console.log(execute(sum, [2, 4, 6]));

// task 10

// function show() {
//  return this.name;
// }

// const a = { name: "A" };
// const b = { name: "B" };
// const fn = show.bind(a);

// console.log(fn.call(b));

// task 11

// const obj = {
//     value: 100,
//     get() {
//         let inner = () => {
//         return this.value;
//         }
//     return inner();
//     }
// };

// console.log(obj.get());

// task 12

// const obj = {
//     value: 1,
//     add(x) {
//         this.value += x;
//         return this;
//     }
// };

// obj.add(5).add(10);
// console.log(obj.value)


//Setter and Getter
// task 1

// class Employee {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const emp = new Employee ("John", "Smith");
// console.log(emp.fullName);

// task 2

// class Account {
//     constructor(password) {
//         this._password = password;
//     }

//     set password(newPassword){
//         if (newPassword.length >= 6) {
//             this._password = newPassword;
//         }
//         else {
//             console.log("Password too short");
//         }
//     }

//     get password() {
//         return this._password;
//     }
// }

// const acc = new Account ("initial");
// console.log(acc.password);
// acc.password = "123";
// console.log(acc.password);

// task 3

// class Temperature {
//     constructor(celsius) {
//         this._celsius = celsius;
//     }

//     set celsius(value) {
//         this._celsius = value;
//     } 
    
//     get fahrenheit() {
//         return this._celsius * 9 / 5 + 32;
//     }
// }

// const temp = new Temperature(0);
// console.log(temp.fahrenheit);
// temp.celsius = 100;
// console.log(temp.fahrenheit);

// task 4

// class Counter {
//     constructor() {
//         this._count = 0;
//     }

//     increment() {
//         return this._count += 10;
//     }

//     get current() {
//         return this._count;
//     }
// }

// const count = new Counter();
// console.log(count.current);
// count.increment();
// console.log(count.current);

// task 5

// class Product {
//     constructor (price) {
//         this._price = price;
//     }

//     set item(value) {
//         this._price = value;
//     }

//     get discount() {
//         return this._price - (0.1 * this._price);
//     }
// }

// const product = new Product (1000);
// console.log(product.discount);
// product.item = 2000;
// console.log(product.discount);

// task 6

// class BankAccount {
//     constructor (balance = 0) {
//         this._balance = balance;
//     }

//     set adder(value) {
//         if (value > 0) {
//             this._balance += value;
//         }
//         else {
//             console.log("Can not deposite negative amount");
//         }
//     }

//     get balance() {
//         return this._balance;
//     }
// }

// const acc = new BankAccount (12000);
// console.log(acc.balance); 
// acc.adder = -1000;
// console.log(acc.balance);

// task 7

// class Rectangle {
//     constructor (width, height) {
//         this._width = width;
//         this._height = height;
//     }

//     set width(otherWidth) {
//        this._width = otherWidth;
//     }

//     set height(otherHeight) {
//         this._height = otherHeight;
//     }

//     get sub() {
//         return this._width * this._height;
//     }
// }

// const rec = new Rectangle(5, 2.4);
// console.log(rec.sub);
// rec.width = 10;
// rec.height = 4.8;
// console.log(rec.sub);

// task 8

// class Email {
//     constructor(email) {
//         this._email = email;
//     }

//     set checking (email) {
//         if (email.includes("@")) {
//             this._email = email;
//             console.log("Correct email")
//         }
//         else {
//             console.log("Invalid email")
//         }
//     }

//     get checking() {
//         return this._email;
//     }
// }

// const email = new Email ("johnsmith20@gmail.com");
// console.log(email.checking);
// email.checking = "invalidemail";
// console.log(email.checking);

// task 9

// class Card {
//     constructor() {
//         this._total = 0;
//     }

//     set adder (price) {
//         if (price > 0) {
//             this._total += price;
//         }
//     }

//     get adder() {
//         return this._total;
//     }
// }

// const card = new Card()
// console.log(card.adder);
// card.adder = 1000;
// console.log(card.adder);


//Map, Zip, Filter
// task 1

// let arr = [1, 2, 3];
// let double = arr.map(x => x * 2);
// console.log(double);

// task 2

// let arr = ["anna", "john"];
// console.log(arr.map(arr => arr.toUpperCase()));

// task 3

// let arr = [{name: "A", age: 10}, {name: "B", age: 15}];
// let x = arr.map(person => person.age);
// console.log(x);

// task 4

// let arr = [7, 6, 15, 48, 51];
// let x = arr.filter(x => x % 2 === 0);
// console.log(x);

// task 5

// let obj = [
//     {name: "John", age: 17},
//     {name: "Tom", age: 46},
//     {name: "Catrin", age: 32}
// ];

// let adult = obj.filter(user => user.age >= 18);
// console.log(adult);

// task 6

// let wordLength = [
//     {word: "cat"},
//     {word: "jaguar"},
//     {word: "eagle"}
// ];

// let animal = wordLength.filter(animal => animal.word.length > 5);
// console.log(animal);

// task 7

// let obj = [
//     {name: "John", age: 17},
//     {name: "Tom", age: 46},
//     {name: "Catrin", age: 32}
// ];

// let adult = obj.filter(user => user.age >= 18);
// let names = adult.map(user => user.name);
// console.log(names);

// task 8

// let arr = [8, 7, 11, 4, 18];
// let even = arr.filter(x => x % 2 === 0);
// let square = even.map(x => x * x);
// console.log(square);

// task 9

// let obj = [
//     {product: "milk", price: 500},
//     {product: "chips", price: 1500},
//     {product: "chicken", price: 2500}
// ];

// let high = obj.filter(item => item.price > 1000);
// console.log(high);

// task 10

// let obj = [
//     {name: "Anna", age: 17},
//     {name: "John", age: 20}
// ];
// let x;
// let adult = obj.filter(person => person.age > 18)
// if (adult) { 
//    x = adult.map(adult => `${adult.name} is ${adult.age} years old` ) 
// };
// console.log(x);