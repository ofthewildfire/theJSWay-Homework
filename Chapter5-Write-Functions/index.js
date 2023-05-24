const r = document.querySelector("h2");
r.innerText = "Not what is in the HTML";

/* 
Improved hello
Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.


*/
// Say hello to the user
function sayHello(firstName, lastName) {
	const message = `Hello, ${firstName} ${lastName}!`;
	return message;
}

// let firstName = prompt("What is your first name: ");
// let lastName = prompt("What is your last name: ");

let greeting = sayHello(firstName, lastName);

console.log(greeting);

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
