// Q1
let a = "Aniket";
let b = 23;
console.log(a+b);

// Q2
console.log(typeof (a+b))

// Q3
const person ={
    name:"aniket",
    age:23,
}
console.log(person)
person['location']="Thane";
console.log(person)

console.log(person.name)

// ****************Practice Questions on Data Types**********************

//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
let inpDistance = prompt("Enter a distance in Km: ")
let distInMtr= inpDistance*1000;
let distInCm= inpDistance*100000;
console.log(`${inpDistance}Km in meter is ${distInMtr}mtr and in Centimeter is ${distInCm}cm`)

//Question-2:    WAP to input radius of a circle and log the area of circle.
const radius = prompt("Enter a radius: ");
let area = Math.PI * radius * radius;
console.log(`radius of circle is ${radius} and area of the circle is ${area}`);

//Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.
const num1 = parseInt(prompt("Enter a Number: "));
const num2 = parseInt(prompt("Enter second Number: "));

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Remainder: ", num1 % num2);
console.log("Exponentiation: ", num1 ** num2);


//Question-4:    WAP to calculate total marks in two subject and then calculate percentage.
const sub1 = parseInt(prompt("Marks of first subject: "));
const sub2 = parseInt(prompt("Marks of second subject: "));
let obtainMarks = sub1 + sub2; //part
let totalMarks = 200;
console.log("Total marks in 2 subjects: ", obtainMarks);
console.log("Percentage: ", (obtainMarks / totalMarks) * 100,"%");

//Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
const lengthOfRect = +prompt("Enter length of the reactangle: ");
const breadthOfRect = +prompt("Enter breadth of the reactangle: ");
let perimeterRectangle = 2*(lengthOfRect + breadthOfRect);
let areaReactangle = lengthOfRect * breadthOfRect;
console.log(`Area = ${areaReactangle} and Perimeter = ${perimeterRectangle}`)


//Question-6:    WAP to input n numbers and log the average of those number.
let n = parseInt(prompt("Enter n:"));
let numbers = [];
for (let i = 0; i < n; i++) {
            numbers.push(parseFloat(prompt(`Enter number ${i + 1}: `)));
        }
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / n;
console.log("Average of your number is: ", average);

//Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
let distanceKm = parseFloat(prompt("City distance in KM: "));
let inMeter = distanceKm * 1000;
console.log("City distance in meter: ", inMeter);
let inFeet = inMeter * 3280.84;
console.log("City distance in feet: ", inFeet);
let inInches = inMeter * 39370.1;
console.log("City distance in inches: ", inInches);
let inCentimeter = inMeter * 1000 * 100;
console.log("City distance in centimeter: ", inCentimeter);

//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
let calculation = 5 / 9 * (fahrenheit - 32); // FORMULA: C = 5/9(F-32).
console.log("Temperature in Centigrade: ", calculation);


//Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
let inputQuantity = parseFloat(prompt("Enter quantity of product: "));
let inputRate = parseFloat(prompt("Enter quantity of rate: "));
let amount = inputQuantity * inputRate;
console.log("Amount of product: ", amount);
let discountPrice = amount / 10;
console.log("After discount: ", amount - discountPrice);


//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
let principalAmount = parseFloat(prompt("Enter principal amount: "));
let rateOfInterest = parseFloat(prompt("Enter rate of interest: "));
let numberOfYears = parseFloat(prompt("Enter number of years: "));
// A = P (1 + rt)
// A = final amount, P = initial principal balance, r = annual interest rate, t = time (in years)
let simpleInterest = principalAmount * (1 + (rateOfInterest * numberOfYears));
console.log("Simple Interest: ", simpleInterest);