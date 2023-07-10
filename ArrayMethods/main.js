import { numbers, sentence, letters, random } from "./data.js";

//Delete with splice;
// Returns the array of removed elements.
// console.log(sentence);
// sentence.splice(sentence.length, 0, "with", "added", "content!");
// console.log(sentence.slice());
// console.log(numbers.splice(2, 3));

// console.log(numbers);

// Codewars - 8kyu
function findAverage(array) {
	let total = array.reduce((acc, curr) => acc + curr, 0);
	let arrL = array.length;
	let average = total / arrL;

	return arrL > 0 ? average : 0;
}

// function fakeBin(x) {
// 	let splitString = x.split("");
// 	return splitString.map((item) => (item < "5" ? 0 : 1)).join("");
// }

// Regex version.

// function fakeBin(x) {
// 	return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
// }

// How is this working.
const fakeBin = (x) => [...x].reduce((a, b) => a + ~~(+b / 5), "");

console.log(fakeBin("45385593107843568"));
//'01011110001100111'
console.log(fakeBin("509321967506747"));
// '101000111101101'
console.log(fakeBin("366058562030849490134388085"));
// '011011110000101010000011011'

function smash(words) {
	let sentence = "";
	if (words.length > 0) {
		let wordsMap = words.map((item) => (sentence += `${item} `));
		let singleSentence = wordsMap[wordsMap.length - 1];
		return singleSentence.trim();
	} else {
		return "";
	}
}

// Or just this...
// function smash(words) {
// 	return words.join(" ");
// }

function digitize(n) {
	/* 
  
  If number is less than 0 --- return the number 0 in an array [0]
  else if number is > 0 --- return provided digits in an array 
  in REVERSE ORDER -- 1234 = [4, 3, 2, 1]
  */
	return n.toString().split(" ") <= ["0"]
		? [0]
		: n
				.toString()
				.split("")
				.reverse()
				.map((i) => Number(i));
}

const test = ["1", "2", "3", "4"];
console.log(
	`test:`,
	test.map((item) => Number(item))
);
function digitize(n) {
	return String(n).split("").map(Number).reverse();
}
console.log(digitize(35231));
console.log(digitize(0));
console.log(digitize(-4557));
// 35231 => [1,3,2,5,3]
// 0 => [0]

// console.log(smash(["hello", "world", "this", "is", "great"]));
