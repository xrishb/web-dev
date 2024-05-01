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
