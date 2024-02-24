// Q1 program to print the marks of a student in an object using for loop
const marks = {
    Harry: 98,
    Rohan:70,
    Akash:47,
    Pratik:84
}
console.log(marks);

// using for loop
for(let i=0; i<Object.keys(marks).length; i++){
    console.log(marks[Object.keys(marks)[i]])
}

// using for in loop
for(let i in marks){
    console.log("Marks of "+ i + " is " + marks[i])
} 

//Q3
// let correctNumber = 7;
// let userNumber; 
// while(userNumber != correctNumber){
//     userNumber = +prompt("Guess a correct number between 0 to 11")
// }
// console.log("You guess a correct number")


// function to find mean of 4 numbers
function findMean(a,b,c,d){
    return (a+b+c+d)/4
}
let my = findMean(1,2,3,4)
console.log(my)

// using arrow function
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(1,2,3,4))