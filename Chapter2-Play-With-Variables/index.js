/*Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence. */

// let firstName = prompt("Enter your first name?");
// let lastName = prompt("Enter your last name?");
// alert(`Hello there! ${firstName} ${lastName}`);

// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2;
a -= 1;
a++;
// a is equal to 2 now.
let b = 8;
b += 2;
//b is equal to 10
const c = a + b * b;
// c = 102
const d = a * b + b;
// d = 30
const e = a * (b + b);
// e = 40
const f = (a * b) / a;
// f = 10
const g = b / (a * a);
// g = 2.5?
// console.log(
// 	`a = ${a}`,
// 	`b = ${b}`,
// 	`c = ${c}`,
// 	`d = ${d}`,
// 	`e = ${e}`,
// 	`f = ${f}`,
// 	`g = ${g}`
// );
// Check your prediction by executing it.

/* 
VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%
*/

// let price = Number(prompt("Enter price!"));
// alert((price * 20.6) / 100 + price);

/* 
From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/

// let temperature = Number(prompt("Please enter your temp in celsius!"));
// let fahrenheit = temperature * (9 / 5) + 32;
// alert("The temperature in Fahreinheit is " + " " + fahrenheit);

/* 
Variable swapping
Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5
Add the necessary code to swap the values of variables number1 and number2.


This exercise has several valid solutions. You may use more than two variables to solve it.
*/

let number1 = 5;
let number2 = 3;

number1 = 3;
number2 = 5;

console.log("Num1 expected output 3: ", number1);
console.log("Num2 expected output 5: ", number2);
