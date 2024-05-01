// typescript is syntatic superset of javascript which adds static typing.
console.log('hello world');

// ts types
let number : number = 15;
let firstname : string = 'john';
let isTrue : boolean = false;

// any type : any type disables type checking for that variable
let v : any = true;
v = "string";
Math.round(v);

// unknown type : similiar to any type.
let a : unknown = "boolean";
a = 10;
a = function() {
    console.log("haha");
}

// arrays
const nums : number[] = [];
nums.push(1);
nums.push(2);

// readonly keyword prevents an array from being changed
const names : readonly string[] = ['morris'];


// tuples
let details: [number, string];
details = [5, 'dianosaur'];

// readonly tuple
const detail : readonly [number, string] = [5, 'huhue'];

// objects

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

//   const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford";
//   car.type = 2; will generate error

// enums
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections.North);
  // logs 4
  console.log(CardinalDirections.West);

//   functions
function getTime() : number {
    return new Date().getTime();
}

// void type
function printHello(): void {
    console.log('Hello!');
  }

//   params
function multiply(a: number, b: number) {
    return a * b;
  }

//   optional params with ?
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }