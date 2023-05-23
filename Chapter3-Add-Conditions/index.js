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

// compareTwoNumbers("planet", 2);

/*
nb1: 2 , nb2: 5 , nb3: 10

nb1: 0;
nb3: 25

0, 5 , 25

*/

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
// 	nb1 = nb3 * 2;
// } else {
// 	nb1++;
// 	if (nb2 > nb3) {
// 		nb1 += nb3 * 3;
// 	} else {
// 		nb1 = 0;
// 		nb3 = nb3 * 2 + nb2;
// 	}
// }

/* 

nb1 = 4; nb2: 4; nb3: 4;


nb1: 5
nb2: 4
nb3: 4

nb1: 0
nb2: 4
nb3: 12


nb1=4; nb2=3; nb3=2

nb1 =4
nb2 =3
nb3 = 2


nb1=2; nb2=4; nb3=0

nb1 = 3 //
3, 4, 0

*/

// console.log(nb1, nb2, nb3);

function numberOfDaysInMonth(num) {
	num = Number(num);
	// 28 feb
	// 30 days sep april june and nov
	// 31 days jan, march, may, jul, aug, oct, dec

	/* 
	2 
	9 4 6 11 
	1 3 5 7 8 10 12
	*/

	if (num === 2) {
		here.textContent = `There are 28 days in this month!`;
	} else if (num === 1 || num === 3) {
		here.textContent = "There are 31 days in this month!";
	} else if (num === 5 || num === 7) {
		here.textContent = "There are 31 days in this month!";
	} else if (num === 8 || num === 10) {
		here.textContent = "There are 31 days in this month!";
	} else if (num === 12) {
		here.textContent = "There are 31 days in this month!";
	} else if (num === 4 || num === 6) {
		here.textContent = "There are 30 days in this month!";
	} else if (num === 9 || num === 11) {
		here.textContent = "There are 30 days in this month!";
	}
}

// numberOfDaysInMonth(9);

/* 
Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)
*/

// function getTheNextSecond() {
// hours max is 24 // which is 00
//if s = 59
// s = 0
// m = 59
//m = 0
// m = m+1
// h = h1

// let h = Number(prompt("Hours:"));
// let m = Number(prompt("Minutes:"));
// let s = Number(prompt("Seconds:"));

// if (s === 59) {
// 	s = 0;
// 	if (m === 59) {
// 		m = 0;
// 	} else {
// 		m = m + 1;
// 		h = h;
// 	}
// 	if (h >= 23) {
// 		h = 0;
// 	}
	// } else if (s < 59) {
	// 	s = s + 1;
	// } else if (s > 59) {
	// 	`Seconds not valid! Please try again. `;
	// } else if (h > 23) {
	// 	`Hours not valid! Please try again. `;
	// } else if (m > 59) {
	// 	`Minutes not valid! Please try again. `;
	// }
}

// console.log(`${h}h:`, `${m}m:`, `${s}s`);
