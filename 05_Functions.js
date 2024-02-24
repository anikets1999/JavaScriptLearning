//    *********** Functions *************
/*Functions exist so we can reuse code. They are blocks of code that execute whenever they are invoked. Each function is typically written to perform a particular task, like an addition function used to find the sum of two or more numbers. When numbers need to be added anywhere within your code, the addition function can be invoked as many times as necessary.
*/

// function myFun(){
  //     return "Hello World"
  // }
  // console.log(myFun())
  
//function with parameters
function myAdd(x,y){
  // let result = x+y;
        // return result
        return x+y; // the code written after return will not execute.
}
let a = 33;
let b = 7;
let result = myAdd(a,b)
console.log(`Addition of ${a} and ${b} is: ${result}`)

// arrow function
const hello = () => {
  console.log("Hello Aniket! How are you?");
  return "Hello Pratik! have a good day.";
};
let h = hello();
console.log(h);

//
function myFunc(username){
  if(!username){
        console.log("Please Enter your name.")
        return
    }
    return `${username} just logged in`; // this will not execute bcz we used return above
  }
  console.log(myFunc());
  
  
  //////////////////////
  function calculateCartPrice(val1, val2, ...num1){
    return num1
  }
  console.log(calculateCartPrice(200, 400, 500, 2000));
  
  const user = {
    username: "hitesh",
    prices: 199
  }
  function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  }
  
  // handleObject(user)
  handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


//    *********** Scopes *************
//var c = 300
let ab = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5)) 
function addone(num){
  return num + 1
}

// addTwo(5) // it wil give an error bcz addTwo is a variable
const addTwo = function(num){
  return num + 2
}
