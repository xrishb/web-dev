// object is collection of properties, in a key value pair


// create an object
const student = {
    // key: value
    firstName: 'jack',
    age: 21
};
console.log(student);

// access a single property

student.age = 22;
console.log(student.age);

// we can also assume that keys are index names and values are the values stored in that index, so we can access values as:
console.log(student['firstName']);

// add properties to it
student.section = 'A';
student.id = 911230;

console.log(student);

// delete a property
delete student.section;

// objects can have functions as well

const person = {
    id: 720,
    firstname: 'dino',

    // the keyword 'this' targets the properties of the same object. by using 'this' keyword we can access the object's properties
    greet: function() {
       return console.log('hello ' + this.firstname);
    }
};

person.greet();

// constructors are used to create a new object 

// create a constructor function, with some params
function Job(p_job, p_wage) {
    this.job = p_job,
    this.wage = p_wage;
};

// create a new object of Job

// traditionally
const jobs = new Job();
jobs.job = 'huehe';
jobs.wage = 100;

// alternatively
const military = new Job('wingman', 1000);

console.log(jobs);
console.log(military);

// default js constructors : string, boolean, number, object

// get and set methods
// object functions are accessed with their names, and not as method 
const employee = {
    firstName: 'ram',

    // get method
    // dont access value as method.
    get getName() {
        return this.firstName;
    },

    // set method is used to set values of a property
    set setName(newName) {
        this.firstName = newName;
    }
};

let namess = employee.getName;
console.log(namess);

employee.setName = 'maya';