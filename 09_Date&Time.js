// Dates

let myyDate = new Date()
console.log(myyDate);
console.log(myyDate.toString());// Sat Dec 09 2023 18:21:23 GMT+0530 (India Standard Time)
console.log(myyDate.toDateString()); //  Sat Dec 09 2023
console.log(myyDate.toLocaleDateString()); //  9/12/2023
console.log(myyDate.toTimeString()); //  18:18:00 GMT+0530 (India Standard Time)
console.log(myyDate.toLocaleString());//  9/12/2023, 6:19:21 pm
console.log(myyDate.toISOString()); //  2023-12-09T12:50:03.069Z

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",   
})
