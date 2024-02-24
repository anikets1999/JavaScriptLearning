//                   *********  Variables and Datatypes  **********

//var
var c = 7;
console.log(c);

// let
let a = "Aniket"
console.log(a);
a = "Pratik";  // updating variable a but we cannot redeclare like ==> let a = 'pratik'
console.log(a)

//const
const b = "harry"
console.log(b)
// b="emma"   // it will give an error bcz b is constant variable
// console.log(b); 


/// Declare a variable and initialize it
// Global variable declaration
let Name = "Apple";
// Function definition
function MyFunction() {

	// Local variable declaration
	let num = 45;

	// Display the value of Global variable
	console.log(Name);

	// Display the value of local variable
	console.log(num);
}
// Function call
MyFunction();


// ************** Data Types ************
// Primitive Data types
let aa = null; // null for unknown values – a standalone type that has a single value null.
let bb = 23;   // number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
let cc = true;  // boolean
let dd = BigInt('564');  // bigint for integer numbers of arbitrary length.
let ee = "Harry";  // string for strings. A string may have zero or more characters, there’s no separate single-character type.
let ff = Symbol('Ima nice symbol'); // The symbol type is used to create unique identifiers for objects
let gg;  // undefined for unassigned values – a standalone type that has a single value undefined.

/*The typeof operator allows us to see which type is stored in a variable.*/
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log(typeof dd);
console.log(typeof ee);
console.log(typeof ff);
console.log(typeof gg);

// non-primitive data type --> object
let anime={
	luffy:"One Piece",
	Goku:"Dragon Ball Z",
}


// Type Conversion
let n = "33abc";
console.log(typeof n);
let valueInNumber = Number(n);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//Number()
// "33" => 33
// "33abc" => NaN
// true => 1 , false=> 0

//Boolean()
// "" => false , "aniket" => true

let mynum = 3 + 2 + "1" // ------> it will add 3+2=5 and 5+"1" will give "51" i.e string

console.log(+true) // + sign before it converts to number i.e. 1
console.log( +"");//0

console.log("----------------");

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === 
console.log("2" === 2); // false

abc = " \t \n" - 2
console.log(abc, typeof abc)

