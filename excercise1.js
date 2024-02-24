// Write a Javascript program to generate a random number and store it in a variable
// The program then takes an input from the user to tell them whether the guess was correct,greater or lesser than original number.
// 100-(no. of guesses) is the score of the uer. The program is expected to terminate once the number is guessed. Number should be between 1-100.
const min=1;const max=100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let inpNumber;
let score = 100;

while (inpNumber != randomNumber){
    score -= 1;
    inpNumber = +prompt("Enter a number between 1 to 100: ");

    if (inpNumber == randomNumber){
        console.log("Congratultions! You guess the correct number....");
        console.log(`You guess the actual number in ${100-score} chances`);
    }
    else if (inpNumber>randomNumber && inpNumber<=100) {
        console.log("Your number is greater than actual number.");
    }
    else if (inpNumber<randomNumber && inpNumber >0) {
        console.log("You number is less than the actual number.")
    } 
    else {
        console.log("Please Enter a number between 1 to 100.");    
    }
}