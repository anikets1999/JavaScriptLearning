//               ************* Operators and expressions *************
const empId = 593;
let empName = "Aniket Sonawane";
let empCity = "Pune"
var empEmail = "aniket@unfyd.com"
console.table([empId,empName,empEmail,empCity]);

// 77;
// "Pratik bhai"
// false
console.log("Operators in Js")

// Arithmetic Operators
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)
console.log("a is now = ", a)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
assignment -= 5 // same as assignment = assignment - 5
assignment *= 5 // same as assignment = assignment * 5
assignment /= 5 // same as assignment = assignment / 5

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */

//
let gameCounter = 100
++gameCounter;
console.log(gameCounter);