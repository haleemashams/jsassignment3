document.write("<br> <hr><h1>Positive Num</h1>")
document.write("<br> <hr><h2>Math.round,floor,ceil</h2>")

var number = parseInt(prompt("Enter a positive integer:"));

document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Rounded value: " + Math.round(number) + "</h3>");
document.write("<h3>Floor value: " + Math.floor(number) + "</h3>");
document.write("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
//////////////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Negative Num</h1>")
document.write("<br> <hr><h2>Math.round,floor,ceil</h2>")
var number = parseFloat(prompt("Enter a negative floating point number:"));

document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Rounded value: " + Math.round(number) + "</h3>");
document.write("<h3>Floor value: " + Math.floor(number) + "</h3>");
document.write("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
/////////////////////////////////////////////////////////
document.write("<br> <hr>")

var number = parseFloat(prompt("Enter a number:"));

document.write("<h3>Absolute value: " + Math.abs(number) + "</h3>");
///////////////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Dice</h1>")
document.write(" <h2>Math.random</h2>")
var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Dice value: " + diceValue + "</h3>");
//////////////////////////////////////////////////////////////

document.write("<br> <hr><h1>Coin Toss </h1>")
document.write(" <h1>Math.random</h1>")
// Generate a random number between 0 and 1 to simulate a coin toss
var coinTossValue = Math.floor(Math.random() * 2);

if (coinTossValue === 0) {
  document.write("<h3>Coin value: Heads</h3>");
} else {
  document.write("<h3>Coin value: Tails</h3>");
}
//////////////////////////////////////////////////////
document.write("<br> <hr><h1>Ramdom Number </h1>")

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("<h3>Random number: " + randomNumber + "</h3>");
////////////////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Weight </h1>")

var weightInput = prompt("Please enter your weight in kgs or kilograms:");

var weightValue = parseFloat(weightInput);

document.write("<h3>Your weight is: " + weightValue + " kgs</h3>");
//////////////////////////////////////////////////////////////////////
document.write("<br> <hr><h1> Secret Num </h1>")
// Ask the user to input a number between 1 and 10
var userInput = prompt("Please enter a number between 1 and 10:");


// Generate a random secret number from 1 to 10
var secretNumber = Math.floor(Math.random() * 10) + 1;



// Parse the user input to extract the number value
var userNumber = parseInt(userInput);

// Check if the user input matches the secret number
if (userNumber === secretNumber) {
  document.write("<h3>Congratulations! You guessed the secret number " + secretNumber + ".</h3>");
} else {
  document.write("<h3>Sorry, the secret number was " + secretNumber + ". Try again next time!</h3>");
}




