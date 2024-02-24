//Q1 create an array, take a number from user and add into it
// let numbers = []
// let n = +prompt("How many numbers do you want");
// for (let i=0;i<n;i++){
//     let numbersFromUser = +prompt("Enter a no. ")
//     numbers.push(numbersFromUser);
// }
// console.log(numbers)

// Q2 filter a numbers divisible by 10 from a given array
let arr = [1,20,3,40,5]
let filteredArray = arr.filter((x)=>{
    return x%10==0;
})
console.log(filteredArray)

// Q3 create an array of square of given numbers
let squareArray = arr.map((x)=>{
    return x*x
})
console.log(squareArray)

//Q4 use reduce to calculate factorial of a given number from an array of first n natural numbers
let factorialArray = arr.reduce((x1,x2)=>{
    return x1*x2 
})
console.log(factorialArray)