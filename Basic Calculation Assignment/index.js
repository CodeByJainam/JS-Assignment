// Arithmetic Operators
// 1. Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using console.log.

let r = 7;
console.log("Answer 1 :- ", 3.14 * r * r);
// 2. Given the variables a = 10, b = 20, and c = 5, write a JavaScript code to find the value of (a * b) / c + (b - a). Use console.log to display the result.

let a = 10;
let b = 20;
let c = 5;
console.log("Answer 2 :- ", a * b / c + b - a);

// Assignment Operators
// 3. Given the variables x = 5 and y = 10, use assignment operators to increment x by 2 and multiply y by x. Display the new values of x and y using console.log.
let x = 5;
let y = 10;
let xResult = x += 2;
let sum = x * y;
console.log("Answer 3 :- ", "X=", xResult, "Y= ", sum);

// 4. Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.

let num = 5;
let add = 15;
let sub = 5;
let mult = 3;
let div = 2;
console.log("Answer 4 :- ", "ADD:- ", num + 15, "Subtract:- ", sub - 5, "Multiply:- ", mult * 3, "Divide:- ", div / 2);

//Comparison Operators
// 5 Given the variables score1 = 85 and score2 = 90, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using console.log.

let score1 = 85;
let score2 = 90;

console.log("Answer 5 :- ", score1 > 80, score2 > 80);

// 6 Write a JavaScript code snippet to compare two strings, "apple" and "banana", using comparison operators to check if the first string is less than the second string. Display the result using console.log.
let a1 = "Apple";
let b1 = "Banana";
console.log("Answer 6 :- ", a1 < b1);

// Logical Operators
// 7 Given age = 25 and hasDrivingLicense = true, use logical operators to write a condition that checks if the person is eligible to drive. Print the result using console.log.
let age = 25;
let hasDrivingLicense = true;

console.log(age >= 18 && hasDrivingLicense);


// 8 Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) or is a multiple of 5 using logical operators. Display the result using console.log.
let number = 24

console.log("Answer 8 :- ", (number >= 10 && number <= 50) || (number % 5 === 0))

//Type Conversion
//9 Write a JavaScript code snippet that converts a string "123.45" to a number and adds 10 to it.
// Display the result using console.log.
const num1 = "123.45"
const result = Number(num1) + 10
console.log("Answer 9 :- ", result)


//10 Write a JavaScript code snippet to convert a boolean value true to a string and concatenate it with " is the value".
//  Use console.log to display the result.
const number2 = true
const result2 = String(number2) + " is the value"
console.log("Answer 10 :- ", result2)


// 12 Write a JavaScript code snippet that uses 
// console.log to display the values of variables a = 5, b = 10, and the result of their addition.
let j = 5;
let i = 10;
let sum01 = a + b;
console.log("Answer 12 :- ");
console.log("Value of j:", j);
console.log("Value of i:", i);
console.log("Sum of j and i:", sum01);



//13 Write a JavaScript code snippet that checks if a given number is positive.
// Use an if statement and display the result using console.log.
let number3 = 10;

if (number3 > 0) {
    console.log("Answer 13 :- ", "The number is positive.");
}

//14 Given the variable temperature = 30,
//  write an if statement that checks if the temperature is above 25. If true,
//   log "It's a hot day" to the console.

let temperature = 30;

if (temperature > 25) {
    console.log("Answer 14 :- ", "It's a hot day");
}

//15 Write a JavaScript code snippet that checks if a number is positive, negative, 
// or zero using nested if-else statements.
//  Display the appropriate message using console.log.

let number24 = -10;

if (number24 >= 0) {
    if (number24 === 0) {
        console.log("Answer 15 :- ", "The number is zero.");
    } else {
        console.log("Answer 15 :- ", "The number is positive.");
    }
} else {
    console.log("Answer 15 :- ", "The number is negative.");
}

//16 Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:
// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.

let score = 75;

if (score >= 90) {
    console.log("Answer 16 :- ", "Grade A");
} else {
    if (score >= 80) {
        console.log("Answer 16 :- ", "Grade B");
    } else {
        if (score >= 70) {
            console.log("Answer 16 :- ", "Grade C");
        } else {
            console.log("Answer 16 :- ", "Grade D");
        }
    }
}
//17 Write a JavaScript code snippet that uses arithmetic, comparison,
// and logical operators to determine if a number is both even and greater than 10. 
// Display the result using console.log.
let number11 = 14;

if (number11 % 2 === 0 && number11 > 10) {
    console.log("Answer 17 :- ", "The number is even and greater than 10.");
} else {
    console.log("Answer 17 :- ", "The number is not both even and greater than 10.");
}

// 19 Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, 
// and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. 
// Log the result.


let num9 = 8;
let num8 = 3;
num9 += 1;
let isMultiple = (num9 % num8 === 0);
console.log("Answer 19 :- ", "After incrementing is num1 a multiple of num2 is ", isMultiple);

// 20 Write a JavaScript code snippet that checks if a given variable age is either less than 18 or greater
//  than 60 using logical operators, and displays the message
//  "Not eligible" using console.log. If neither condition is met, 
// display "Eligible".

let age1 = 20; 

if (age1 < 18 || age1 > 60) {
  console.log("Answer 20 :- ","Not eligible");
} else {
  console.log("Answer 20 :- ","Eligible");
}
