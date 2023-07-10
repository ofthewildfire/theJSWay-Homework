// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// function camelize(string) {
// 	const subString = string.split("-");

// 	// console.log(subString);

// 	// you silly girl just use a for loop and start at 1 the first index lmao

// 	let word = [];

// 	for (let i = 1; i < subString.length; i++) {
// 		let firstCap = subString[i].slice(0, 1).toUpperCase();
// 		// console.log(firstCap);
// 		let fullword = firstCap + subString[i].slice(1);
// 		word.push(subString[0], fullword);
// 	}

// 	// take the secod array and plus and cap them
// }

// function camelize(string) {
// 	let subStringArr = string.split("-");
// 	let fullWord = [];

// 	for (let i = 1; i < subStringArr.length; i++) {
// 		let wordsFromIndex1 = subStringArr[i];
// 		let firstWord = subStringArr[0];
// 		let lowerCase = subStringArr[i].slice(1);
// 		let upperCaseLetter = wordsFromIndex1.slice(0, 1).toUpperCase();

// 		fullWord.push(firstWord, upperCaseLetter, lowerCase);

// 		// console.log(firstWord + upperCaseLetter + lowerCase);
// 	}

// 	console.log(fullWord);

// 	return subStringArr;
// }

// function camelize(str) {
// 	return str.split()
// 	.map((

// 	))
// }

function camelize(str) {
	return str
		.split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
		.map(
			// capitalizes first letters of all array items except the first one
			// converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
			(word, index) =>
				index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));
// == 'backgroundColor';
console.log(camelize("list-style-image"));
// == 'listStyleImage';
console.log(camelize("-webkit-transition"));
// == 'WebkitTransition';

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
let product = 0;

for (let i = 0; i < values.length; i++) {
	product += values[i];
}

// console.log(product);

function sumOfArrNumbers(...arr) {
	let product = 0;
	for (let i = 0; i < arr.length; i++) {
		product += arr[i];
	}

	return product;
}

// console.log(sumOfArrNumbers(10, 12, 3));

// // arr.splice(start[, deleteCount, elem1, ..., elemN])

// const arr = ["Pig", "Butchering", "Scammers", "From", "China"];

// //Concat : The method arr.concat creates a new array that includes values from other arrays and additional items.

// const arr2 = ["Summer", "Winter", "Emma Swan", "Evil Queen", "Belle"];

// // const newArr = arr.concat(arr2);
// // console.log(newArr);

// // let arrayLike = {
// // 	0: "something",
// // 	length: 1,
// // };

// // console.log(arrayLike);

// // const concatWithObj = arr.concat(arrayLike, arr2);

// // console.log(concatWithObj);

// // let arr5 = [1, 2];
// // let arr6 = [];
// // let arrayLike = {
// // 	0: "something",
// // 	1: "I",
// // 	2: "should",
// // 	3: "not",
// // 	4: "exist",
// // 	length: 5,
// // 	[Symbol.isConcatSpreadable]: true,
// // };

// // console.log(arr6.concat(arrayLike));

// // arr.forEach(function (element, index, arr) {
// // 	console.log(element, index);
// // });

// arr.forEach((element, index, arr) => console.log(index == 1 && element));

// const arr = ["Summer", "Winter", "Emma Swan", "Evil Queen", "Belle"];

// let foundBelle = arr.indexOf("Belle", 3);
//arr.indexOf(itemYouAreLookingFor, indexToStartLookingFrom)

//if no second argument is passed it checks the whole array, implicit -1

// console.log(foundBelle); //displays 4 - the item is in the fourth index.

// Consolas, 'Courier New', monospace
