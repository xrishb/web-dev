// object literal
const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    greet: function() {console.log('moshi moshi');}
}

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('moshi moshi from constructor');
    }
}

let john = new Person('john', 25);
john.greet();

/*
    Each JavaScript object has a prototype, which is another object that it inherits properties and methods from. You can add properties and methods to an object's prototype to share them among all instances of that object.
*/

// Adding a method to the Person prototype
Person.prototype.sayAge = function() {
    console.log(`I am ${this.age} years old.`);
};

john.sayAge(); // Output: I am 30 years old.


// Parent constructor function
function Animal(name) {
    this.name = name;
}

// Child constructor function
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.constructor = Dog; // Set the constructor property correctly

let dog = new Dog('Buddy', 'Golden Retriever');

// Polymorphic function
function makeSound(animal) {
    animal.sound();
}

// Different objects with a 'sound' method
let cat = {
    sound: function() {
        console.log('Meow!');
    }
};

let dogs = {
    sound: function() {
        console.log('Woof!');
    }
};

makeSound(cat); // Output: Meow!
makeSound(dogs); // Output: Woof!
