//Variables
var price1 = 5;
var price2 = 6;
var total = price1 + price2;

//Debugging (alerts, comments, the console)
alert("Hello! I am an alert box!!");
console.log('this will go in your browser web dev.')

//Different data types
var length = 23;                               		//Number
var lastName = "Brooks";      						//string
var x = true; var y = false;						//boolean
var x = {firstName:"Trevor", lastName:"Brooks"};    //Object

//Arrays
var colors = ["Blue", "Red", "Green"];

//Testing
==	//equal to
===	//equal value and equal type
!=	//not equal
!==	//not equal value or not equal type


//Logic
var age = Number(age);

if (isNaN(age)) {
    voteable = "Error in input";
} else {
    voteable = (age < 18) ? "Too young" : "Old enough";
}

//Functions
function name(parameter1, parameter2, parameter3) {
    //code to be executed
}
var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}

answer = 12