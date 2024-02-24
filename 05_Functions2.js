// this keyword gives current context
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this); // it will give an empty object
console.log("-----------------");
//
function chai(){
    let username = "hitesh"
    console.log(this.username); // undefined
}
chai()

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai2()

const chai3 =  () => {
    let username = "hitesh"
    console.log(this);
}
chai3()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return function

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//  ************* IIFE (Immediately Invoked Function Expressions) ************
// use to avoid the pollution of global variable

//this named IIFE bcz this function has a name chai
(function chai(){
    console.log("DB connected...");
})(); // if you remove this semicolon it gives error

//this is simple IIFE
((name)=>{
    console.log(`name is ${name}`);
})('aniket')