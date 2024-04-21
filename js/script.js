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
const infine = 12423423534534654657567567563n;

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
