"use strict"
// i dont know what modern bulshit is


// variables, camelCase is preferred
let names = "rishabh";

// declaring same var 2/+ times will cause error, if values are not provided, it will throw undefined error

// let type, character variable is not supported, instead it is treated as string
let uname = "rishabh", age = 21, isEmployed = false, section = "N";

// constants will remain unchanged during the execution cycle. allcaps is preferred.
const MONTHS = 12;

// NAN -> computational error, maybe a undefined mathematical expression

// bigInt ->  increased arbitrary range .
const INFINE = 12423423534534654657567567563n;

// strint literal using $ , must have backticks
let greetings = `hello ${names}`;

// conditionals

const MIN_AGE = 18;

if(age >= MIN_AGE) {
    console.log(greetings);
} else if (age <= MIN_AGE) {
    console.log(`you are underage @${names}`);
}
else {
    console.log("entry is declined, because age wasn't a number value");
}

// type conversion
let underage = false;
underage = String(underage);
// console.log(typeof(underage)); // now converted into string

// numerical conversions are said to be converted automatically, still we can convert it using Number()s and will not convert string values.

underage = Number(underage);
// console.log(typeof(underage));

// boolean convertions are simple, if some variable contains some value it will converted into TRUE otherwise false.
// empty values are simply FALSE


// operators

let a = 5, b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b); // exponent


// string concatination with binary +
let msg = " hello " + "  world ";
// console.log(msg);

// if one of the values is string , it will be converted to string, order doesnt matter here. 

// unary?
let apples = "2";
let mangoes = "3";

// unary + converted the values into number values
// console.log(+apples + +mangoes); s

// string comparison is based on lexicographic values or character values. a = 1 and z = 26

let ch_a = "a", ch_z = "z";
// console.log(a > b); // will print false, because z's value is higher. ah UNICODE-ORDER

// loops are similiar to c++, java im not writing here , BREAK can be used for exiting loop
// switch statements are similiar


// functions

// function showMessage() {
//     console.log(msg);
// }
// showMessage();

// // scopes-> a variables defined inside a block level will be limited to that code
// function newMessage() {
//     let message = "hello this is a message";
//     console.log(message);
// }
// console.log(message); , notice how this statement throws UNDEFINED ERROR
// however we can access outer variables!

// function with param
// function throwMessage(from, text) {
//     from = "*" + from + "*";
//     console.log(from + ' : ' + text);
// }
// let text = "hello";
// throwMessage(names, text);


// // function expression : allows to store functions in the form of variables, more like using it as a value
// let sayHi = function() {
//     console.log("hi");
// }
// let func = sayHi;
// func();


// callback functions
function askQuestion(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}
function showOk() {
    console.log("you agreed");
}
function showCancel() {
    console.log("you cancelled");
}
askQuestion("do you agree", showOk, showCancel());