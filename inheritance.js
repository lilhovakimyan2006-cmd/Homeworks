class Animal {
    obj = [];
    constructor (name, age) {
        this.age = age;
        this.name = name;
        this.obj = [
            `Name: ${this.name}`,
            `Age: ${this.age}`
        ];
    }
    
    eat() {
        return `"${this.name} is eating"`;
    }

    sleep() {
        return `"${this.name} is sleeping"`;
    }

    makeSound() {
        return `"${this.name} makes a sound"`;
    }

    getInfo() {
        return this.obj;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
        this.obj.push(`Breed: ${this.breed}`);
    }

    makeSound() {
        super.makeSound();
        return "Woof!";
    }

    getInfo() {
        return super.getInfo();
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
        this.obj.push(`Color: ${this.color}`);
    }

    makeSound() {
        super.makeSound();
        return "Meow!";
    }

    getInfo() {
        return super.getInfo();
    }
}

const animal1 = new Animal("Generic Animal", 5);

const dog1 = new Dog("Rex", 3, "Labrador");
const cat1 = new Cat("Milo", 2, "White");

console.log("=== Animal ===");
console.log(animal1.eat()); // Generic Animal is eating
console.log(animal1.sleep()); // Generic Animal is sleeping
console.log(animal1.makeSound()); // Some sound
console.log(animal1.getInfo()); // Name: Generic Animal, Age: 5

console.log("=== Dog ===");
console.log(dog1.eat()); // Rex is eating
console.log(dog1.sleep()); // Rex is sleeping
console.log(dog1.makeSound()); // Woof!
console.log(dog1.getInfo()); // Name: Rex, Age: 3, Breed: Labrador

console.log("=== Cat ===");
console.log(cat1.eat()); // Milo is eating
console.log(cat1.sleep()); // Milo is sleeping
console.log(cat1.makeSound()); // Meow!
console.log(cat1.getInfo()); // Name: Milo, Age: 2, Color: White