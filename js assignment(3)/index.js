var username=prompt("What is Your First Name ")
var lastname=prompt("What is Your Last Name ")
var fullname=username +" "+ lastname
alert("Hello " + fullname+" !")
/////////////////////////////////////////////

var favoriteModel = prompt("What is your favorite mobile phone model?");

var inputLength = favoriteModel+" "+ favoriteModel.length;

document.write("Your favorite mobile phone model is: " + favoriteModel);

document.write("<br>The length of String is:  " + inputLength);
/////////////////////////////////////////////
document.write("<br> <hr><h1>IndexOf</h1>")
var word = "Pakistani";

var nIndex = word.indexOf("n");

document.write("The index of 'n' in the word 'Pakistani' is: " + nIndex);
//////////////////////////////////////////////////////////

document.write("<br> <hr><h1>Last IndexOf</h1>")
var word = "Hello World";

var nIndex = word.lastIndexOf("l");

document.write("The last index of 'l' in the word 'Hello World' is: " + nIndex);

////////////////////////////////////////////////////////
document.write("<br> <hr><h1>charAt</h1>")

var word = "Pakistani";

var character = word.charAt(3);

document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

//////////////////////////////////////////////////
var username=prompt("What is Your First Name ")
var lastname=prompt("What is Your Last Name ")
var fullname=username.concat(" ",lastname);
alert("Hello " + fullname+" !")
/////////////////////////////////////////////
document.write("<br> <hr><h1>Replacement</h1>")

var city="Hydrabad"
var replacecity=city.replace("Hydrabad","Islamabad")

document.write("City: "+city)
document.write("<br>After replacement: "+replacecity)
/////////////////////////////////////////////////////////
document.write("<br> <hr><h1>All replacement</h1>")
 var massage="Ali and Sami are best friends.They play cricket and football together. ";
 var remassage=massage.replaceAll("and","&")
 document.write(massage)
 document.write("<br>After replacement"+remassage)
 /////////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Typeof</h1>")
var str = "472";
var num = parseInt(str);

document.write("String value: " + str + "<br>");
document.write("String type: " + typeof(str) + "<br>");
document.write("Number value: " + num + "<br>");
document.write("Number type: " + typeof(num) + "<br>");

////////////////////////////////////////////////////
document.write("<br> <hr><h1>Uppercase</h1>")


var userInput = prompt("Enter a string:");
var capitalizedInput = userInput.toUpperCase();

document.write("Input: " + userInput + "<br>");
document.write("Capitalized input: " + capitalizedInput + "<br>");

//////////////////////////////////////////////////
document.write("<br> <hr><h1>Titlecaseinput</h1>")

var userInput = prompt("Enter a 2nd string:");
var words = userInput.split(" ");
var titleCaseInput = "";

for (var i = 0; i < words.length; i++) {
  var firstLetter = words[i].charAt(0).toUpperCase();
  var restOfWord = words[i].slice(1).toLowerCase();
  titleCaseInput += firstLetter + restOfWord + " ";
}

document.write("Input: " + userInput + "<br>");
document.write("Title case input: " + titleCaseInput + "<br>");
///////////////////////////////////////////////////

document.write("<br> <hr><h1>TO string</h1>")

var num=35.36
var str=num.toString()
document.write("Number: "+num)
document.write("<br>Result: "+str)
//////////////////////////////////////////////////////
document.write("<br> <hr><h1>Test</h1>")
var username = prompt("Enter your username:");

if (/[^\w.@!]/.test(username)) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  document.write("Welcome " + username);
}

//////////////////////////////////////////////////////
const array = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

function searchArray() {
  const searchValue = prompt('Enter a value to search bakery items :');
  if (array.includes(searchValue)) {
    alert(`"${searchValue}" is found in the array.`);
  } else {
    alert(`"${searchValue}" is not found in the array.`);
  }
}

searchArray();
/////////////////////////////////////////////////////////////////////
function validatePassword() {
  const password = prompt('Enter a password:');
  
  // Check if password meets the requirements
  const regex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
  if (regex.test(password)) {
    alert('Valid password!');
  } else {
    alert('Invalid password! Password must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long.');
  }
}

validatePassword();
//////////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Split</h1>")
var university = "U<br>n<br>i<br>v<br>e<br>r<br>s<br>i<br>t<br>y<br> o<br>f<br> K<br>a<br>r<br>a<br>c<br>h<br>i";
var universityArray = university.split(' ');

document.write(universityArray);

//////////////////////////////////////////////////////

function displayLastCharacter() {
var userInput = prompt('Type something here:');
  
 var lastCharacter = userInput[userInput.length - 1];
  
  alert('The last character is: ' + lastCharacter);
}

displayLastCharacter();
//////////////////////////////////////////////////////////
document.write("<br> <hr><h1>Count</h1>")

const sentence = "The quick brown fox jumps over the lazy dog";
const wordToCount = "the";
let count = 0;
///////////////////////////////////////////////////////////////////////////////////////
// Split the sentence into words and count occurrences of the word
var words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === wordToCount) {
    count++;
  }
}
document.write(sentence)

document.write(`<br>The word "${wordToCount}" appears ${count} times in the sentence.`);

document.write('<hr>')
document.write('<hr>')





















