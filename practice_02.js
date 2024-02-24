// Q1
let myName = prompt("Enter your name: ")
let age = +prompt("enter your age: ")
// age = Number.parseInt(age)  --> converting string to number

if (age >= 10 && age <=20){
    alert(`Hello ${myName} your age is ${age} and you are eligible`)
}
else{
    alert(`Hello ${myName} your age is ${age} and you are not eligible`)

}


// Q2 program to find a number is either divsible by 2 and 3
let num1 =  +prompt("enter a number: ")
if (num1%2==0 && num1%3==0){
    console.log("number is divisible either by 2 and 3");
}
else{
    console.log("not divisible by 2 and 3")
}

// Q3 program to find a number is either divsible by 2 or 3
let num2 =  +prompt("enter a number: ")
if (num2%2==0 || num2%3==0){
    console.log("number is divisible either by 2 or 3");
}
else{
    console.log("not divisible by 2 or 3")
}

// Q4 ternary operator

let myAge = 23

console.log(myAge>18 ? "You can Drive" : "You cannot Drive")
