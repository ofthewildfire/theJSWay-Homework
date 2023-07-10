import { random, strings, numbers } from "./data.js";

// console.log(numbers);
// console.log(strings);
// console.log(random);

// Removing from an array.

// Remove from the front of an array = array.shift()
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// Remove an item from the end of an array = array.pop()

// console.log(random);
// random.pop();
// console.log(random);

// Adding to the front of an array = array.unshift(value)

// console.log(strings);
// strings.unshift("zero");
// console.log(strings);

//Add element to the end of an array = array.push(value)

// console.log(numbers);
// numbers.push(7);
// console.log(numbers);

// To delete an item from an array you can use splice()
// Syntax = arr.splice(start[, deleteCount, elem1, ..., elemN])

// console.log(numbers);
// To delete three elements starting at index of zero, syntax is splice(1, 3); The delete is inclusive of the start count. // 1, 2, 6;
// numbers.splice(1, 3);
// console.log(numbers);

// console.log(strings); //Length is 6. Change it to be 'One', 'Two', 'Three', 'JavaScript' 'Study', 'Time';

// strings.splice(3, 3, "JavaScript", "Study", "Time!");
// console.log(strings);

// strings.splice(3, 0, "It", "Is", "Totally");
// console.log(strings.length);
// console.log(strings); //startings counting from after the mentioned index start point.

// console.log(numbers); //to add four more numbers, I have to add it from the index AFTER the last. Negative one length? lets try and add it with a syntax like start at index[length-1] and add 7, 8, 9, 10

// numbers.splice(6, 0, 7, 8, 9, 10);
// console.log(numbers);

// console.log(strings);
// Goal: is to delete all items and replace with the sentence 'I' 'have' 'finally' 'got' 'it'.

// strings.splice(0, strings.length, "I", "hope", "this", "works!");
// console.log(strings);

// strings.splice(3, 3, 4, 5, 6);
// console.log(strings);

// console.log(random);
// random.splice(3, 1);
// console.log(random);
// random.splice(-1, 1);
// console.log(random);

// console.log(numbers);
// numbers.splice(0, numbers.length, 2, 4, 6, 8, 10, 12);
// console.log(numbers);

//Slice - arr.slice([start], [end]) | returns a new array copying to it all items from index start to end (not including end)

// console.log(numbers);
// let subArr = numbers.slice(1, 4);
// console.log(subArr); //2, 3, 4;

// console.log(strings);
// let subStrArr = strings.slice(0, 3);
// console.log(subStrArr);

// console.log(numbers);
// let dual = numbers.concat(strings);
// console.log(dual);

let tripleArr = numbers.concat(
	strings,
	["Whatever", "other", "arrays", "I", "can", "add"],
	random,
	"doesnt",
	"really",
	"matter!"
);

// console.log(tripleArr);
