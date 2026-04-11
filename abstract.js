// task 1

// class Shape {
//     constructor() {
//         if ( new.target === Shape ) {
//             throw new Error ("Cannot instantiate abstract class");
//         }
//     }
//     getArea() {
//         throw new Error ("Method not implemented");
//     }
// }

// class Rectangle extends Shape {
//     constructor (width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * (this.radius ** 2);
//     }
// }

// const shape = new Shape();
// // Error: Cannot instantiate abstract class

// const rect = new Rectangle(10, 5);
// console.log(rect.getArea());   //50


// task 2

// class StorageProvider {
//     upload(file) {
//         throw new Error("Abstract method upload");
//     }
//     download(filename) {
//         throw new Error("Abstract method download");
//     }
// }

// class LocalStorageProvider extends StorageProvider {
//     upload(file) {
//         console.log(`Uploading ${file} to local storage`);
//     }
//     download(filename) {
//         console.log(`Downloading ${filename} from local storage`);
//     }
// }

// class CloudStorageProvider extends StorageProvider {
//     upload(file) {
//         console.log(`Uploading ${file} to cloud`);
//     }
//     download(filename) {
//         console.log(`Downloading ${filename} from cloud`);
//     }
// }

// function useStorage(provider) {
//     if ( typeof provider.upload !== 'function' ||
//         typeof provider.download !== 'function') {
//             throw new Error("Invalid provider, methods missing");
//     }
//     provider.upload("file");
//     provider.download("file");
// }

// useStorage(new LocalStorageProvider());
// // Works

// useStorage({});
// // Error: Invalid storage provider


// task 3

// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log("Dog barks");
//     }
// }

// const d = new Dog();
// d.speak();
