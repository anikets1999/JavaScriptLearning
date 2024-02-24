//         *****  strings *****
// strings are IMMUTABLE

let fullName = "Aniket Sonawane"
let age = 24;
console.log(`Hello my name is ${fullName} and my age is ${age}`)

let country = "InDiA"
console.log(`I live in ${country}`); // Template Literal

console.log(country.length); // 5 

for(let i=0;i<country.length;i++){
    console.log(country[i])
}

// string methods 
console.log(country.toUpperCase()); 
console.log(country.toLowerCase());

console.log(country.slice(0,3));

console.log(country.replace("In","chi"));

let str = "I love "
let sentence = str.concat(country)
console.log(sentence)

let myName = "  aniket   "
let trimMyName = myName.trim()
console.log(myName)
console.log("trim() :",trimMyName)

console.log("includes:",myName.includes('ani'));
console.log("length: ","Ani\"ket".length)

//////////

const gameName = new String("Hiteshhc");
console.log(gameName.__proto__);
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // it will no take negative value
console.log(newString)

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const DOB = "11/12/1999"
console.log(DOB.split("/"));