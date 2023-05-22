const here = document.querySelector("#here");

// let number = Number(prompt("Enter a number: "));
// if (number > 0) {
// 	here.textContent = `${number} is positive!`;
// } else {
// 	if (number < 0) {
// 		here.textContent = `${number} is negative!`;
// 	} else {
// 		here.textContent = `This number = zero 0(${number})`;
// 	}
// }

// Chapter 3: Coding time.

/* 
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/

// const day = prompt("What is the day?");
function nextDay(day) {
	day = day.toLowerCase().trim();
	switch (day) {
		case "monday":
			here.textContent = `Today is ${day} tomorrow will be Tuesday`;
			break;
		case "tuesday":
			here.textContent = `Today is ${day} tomorrow will be Wednesday`;
			break;
		case "wednesday":
			here.textContent = `Today is ${day} tomorrow will be Thursday`;
			break;
		case "thursday":
			here.textContent = `Today is ${day} tomorrow will be Friday`;
			break;
		case "friday":
			here.textContent = `Today is ${day} tomorrow will be Saturday`;
			break;
		case "saturday":
			here.textContent = `Today is ${day} tomorrow will be Sunday`;
			break;
		default:
			here.textContent = `You have not entered a valid day! Refresh. Try again. `;
	}
}

// nextDay(" thURSDAY");

/* 
Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
*/

function compareTwoNumbers(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	if (num1 > num2) {
		here.textContent = `${num1} is greater than ${num2}`;
	} else if (num1 === num2) {
		here.textContent = `${num1} & ${num2} are equal values.`;
	} else if (num1 < num2) {
		here.textContent = `${num1} is less than ${num2}`;
	} else {
		here.textContent = `Please enter a valid number`;
	}
}

compareTwoNumbers("planet", 2);
