//       ********** Arrays ************
let course = ["html","css","JavaScript","React"];
const myArr = new Array(1,2,3,4); // another way to create an array
console.log(course);
console.log(typeof course); // object

console.log(course[2]);
course[3]="Node.js"

console.log(`length of this array is ${course.length}`)
console.log(course);
 

for(let i of course){
    console.log(i);
}


// Arry Methods
console.log("***********array methods***********");
let num = [1,2,3,4,5,6,7]
console.log(typeof num)

//toString()
let numToString = num.toString()
console.log(typeof numToString,numToString)

// join()
let numJoin = num.join("-")
console.log(numJoin)

//pop()
num.pop();
console.log(num)

// push()
num.push(9.9);
console.log(num)

//shift()
num.shift()
console.log(num)

//unshift
num.unshift(0.2);
console.log(num)

// delete num[0]
// console.log(num)

//concat( )
let num2 = ["harry","john"]
let newNum = num.concat(num2);
console.log(newNum);

let marvel_heros = ['Spiderman','Thor','Iron man','Hulk'];
let dc_heros = ['superman','flash']
const nsa = marvel_heros.concat(dc_heros); //
console.log(marvel_heros);
console.log(dc_heros);
console.log(nsa);

//spread operator
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

//sort()
numbers = [11,55,22,99,66]
numbers.sort()
console.log(numbers)

//slice()
let newNumbers = numbers.slice(2);
console.log(newNumbers)

// for loop
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
// For Each Loop
numbers.forEach((element)=>{
    console.log(element**2);
});

// map()
let mapExample = numbers.map((value)=>{
    return value+11;
})
console.log(mapExample)


// filter()
let filterExample = numbers.filter((value) =>{
    
    return value<50;
})
console.log(filterExample)

// reduce()
let reduceExample = numbers.reduce((val1,val2)=>{
    return val1 + val2;
})
console.log(reduceExample)

//
const another_array = [1,2,[3,4],[5,6,[7,8,[9]]],10]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//
console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"));
console.log(Array.from({name:"Pratik"})); // it will gives an empty array, we have tell we want array of keys or values from object
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));