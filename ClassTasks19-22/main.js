// Array methods from js.info

// 1.
function camelize(string) {
	return string
		.split("-")
		.map((element, index) => {
			return index === 0
				? element
				: element[0].toUpperCase() + element.slice(1);
		})
		.join("");
}

//console.log(camelize("background-color")); //backgroundColor
//console.log(camelize("list-style-image")); //listStyleImage
//console.log(camelize("-webkit-transition")); //WebkitTransition

// 2.
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
	let r = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= a || arr[i] <= b) {
			r.push(arr[i]);
		}
	}
	return r;
}

console.log(filterRange(arr, 1, 4));

// 3.
/* 
Filter range "in place"
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/

let arr2 = [5, 3, 8, 1];
function filterRangeInPlace() {
	arr2.pop();
}

console.log(arr2);
filterRangeInPlace();
// filterRangeInPlace();
console.log(arr2);

//4
/* 
Sort in Decreasing Order

let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/

//5
/* 
Copy and Sort Array

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

*/
