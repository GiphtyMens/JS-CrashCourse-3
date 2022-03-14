// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// console.log("**********");

// while (i < 10) {
//   console.log(i);
//   i++;
// }

//break and continue
// this prints numbers starting from 0, and writes "Five" when it i=5 and continues count to 9
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("Five");
//     continue;
//   }
//   console.log(i);
// }

//Function:
// group of code(can be one line of code) that can be used over and over again
// we use funtions because it can take more lines of code than a variable

// Declaring a function
function mySelf() {
  console.log("My name is John Doe");
}
mySelf();

// function with Parameter
function mySelf(name) {
  console.log("My name is ", name);
}
mySelf("John Doe");
mySelf("Gifty Doe");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}
add(5, 6);
add(6, 7);
add(7, 8);

function multiply(z, f) {
  let division = z * f;
  console.log();
}

// function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// Arrow function: works same as the normal function but its shorter
// declare a variable, params...
// let divide = (a,b) => a / b;
// let multiply = (a,b) => {
//     return(divide);
// }
// console.log(divide(10,5));
// console.log(multiply(10,5));

// HIGHER ORDER FUNCTION: is a function that takes a function as a parameter
// map is used here to repeat numbers in this form
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);

let double = numbers.map((number) => number + number);
console.log(double);

// filter: used to select items randomly
let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

let odd = numbers.filter((number) => number % 2 !== 0);
console.log(odd);

// find is used to find only one ClipboardItem, if the item is 2, we use filter
let Five = numbers.find((numb) => numb === 5);
console.log(Five);


// need to study on my own
// fetch api
// async and await
// try and catch



// STRINGS "" any character of the keyboard that is in quote
// length includes space counts(one use is creating of password)
// length STARTS COUNTING FROM 1 WHILE INDEX STARTS COUNT FROM 0
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);

// CHARCODEAT: the charcter code at this position(10)
console.log(sentence.charCodeAt(10));
// CONCAT: joining two sentences together
console.log(sentence.concat(" from concatenation"));
// ENDSWITH: answers with true or false
console.log(sentence.endsWith("dog"));
// INCLUDES: answers with true or false
console.log(sentence.includes("lazy"));
// INDEXOF: this states the numerical position of a letter or words
console.log(sentence.indexOf("u"));
// lastIndexOf(starts counts from the end)
console.log(sentence.lastIndexOf("o"));
// start count from 13th position
console.log(sentence.lastIndexOf("o", 13));
// learn regular expression : RegExp
// goves space from the start of elements
console.log(sentence.padStart(10));
// goves space from the end of elements
console.log(sentence.padEnd("10"));
// repeats sentence multiple times
console.log(sentence.repeat(3));
// Replace takes two parameters 1st(word we want to replace, 2nd word we want to replace with)
console.log(sentence.replace("lazy", "hardworking"));

// slice
// if u dont specify the end, it will load all remaining words
console.log(sentence.slice(20));
// this states the start and the end
console.log(sentence.slice(20, 30));
// split: separates sentence based on users descretion...space eg with email, they use @ to split
console.log(sentence.split(" "));
// eg:
let email = "kofi@email.com";
console.log(email.split("@"));

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// trim: used to take away space around sentences or words. it doesnt atake spaces within sentences..only begining and end. used to store peoples passwords
// trimEnd and trimStart








































































































































































 



