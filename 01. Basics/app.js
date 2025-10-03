//console.table({ name: "David", age: 40 });
//console.table([0, 2, 4, 6, 8]);
//console.clear();
//console.warn("this is a warning");

//variables
// let name;
// let banana;
// banana = "banana";
// console.log(banana);

// let num = 2;
// //Basic Math
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 8); //** power to */

// let counter = 0;
// counter++;
// console.log(++counter);
// console.log(counter++);
// console.log(counter);

// let bool = NaN;
// let number = 10;
// console.log(bool);

//falsy values:
// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (empty quotes)

// otherwise: truthy

let notDefined = undefined;
console.log(notDefined);

//Equality Operators
//=== strict equality (type + value)
//!== strict non-equality operators (type+value)
//== lose equality operator (value)
// != lose not equality operator (value)

console.log(10 === "10"); // false
console.log(10 == "10"); // true
console.log(10 === 10); // true
console.log(10 == 10); // true
console.log(10 !== "10"); // true
console.log(10 != "10"); // false
console.log(10 !== 10); // false
console.log(10 != 10); // false

//strings data type
let str = "   David          ";
//length
console.log(str.length);
//slice
console.log(str.slice(0, 1));
console.log(str.slice(1, 4)); //the end char is not included
console.log(str.slice(4, 5));

//split & join
console.log(str.split("").join("-"));
//includes
console.log(str.includes("av"));
//trim
console.log(str);
console.log(str.trim());

//multiline
let firstName = "David";
let lastName = "WebDev";

let fullName = `${firstName} ${lastName.toLocaleUpperCase()} something`;
fullName += " and lives in Manhattan";
console.log(fullName);
let desc = `this is some random
    Text
    1
    2
    `;
console.log(desc);

//type conversion
//let money = "50";
// convert string to number
//money = parseInt(money);
//money = +money;
//money = Number(money);

// convert number to string
//let money = 50;
//money = money.toString();
//money = String(money);

// convert string to decimal
let money = "50.245";
money = parseFloat(money);

console.log(money);
console.log(typeof money);
