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
