/* 
Minimum of two numbers
Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function

*/

function min(a, b) {
	if (a < b) {
		return a;
	} else if (b < a) {
		return b;
	} else if (a === b) {
		return a;
	}
}

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9)); // Must show 9
// console.log(min(1, 1)); // Must show 1

console.log(min(45, 51)); // Must show 45
console.log(min(2, 1)); // Must show 1
console.log(min(0, 1)); // Must show 0

/* 
Number squaring
Complete the following program so that the square1() and square2() functions work properly.

When it's done, update the program so that it shows the square of every number between 0 and 10.
*/

function sq1() {
	for (let i = 0; i <= 10; i++) {
		console.log(`The sqrt of ${i} is: ${i * i * i} `);
	}
}

// console.log(sq1());

// Square the given number x
function square1(x) {
	let exponent = x;
	let base = x;

	return base * exponent;

	// TODO: complete the function code
}

// Square the given number x
const square2 = (x) => x * x;
// TODO: complete the function code

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25
//
// console.log("Top is sq1 - bottom is sq2");
//
// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

/* 
Improved hello
Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.


*/
// Say hello to the user
// function sayHello(firstName, lastName) {
// 	const message = `Hello, ${firstName} ${lastName}!`;
// 	return message;
// }

// let firstName = prompt("What is your first name: ");
// let lastName = prompt("What is your last name: ");

// let greeting = sayHello(firstName, lastName);

// console.log(greeting);

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
