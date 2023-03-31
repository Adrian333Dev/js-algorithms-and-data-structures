/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */

const capitalizeWords = (arr) => {
	if (!arr.length) return [];
	let str = arr.pop();
	let capitalized = str.toUpperCase();
	console.log(capitalized);
	return capitalizeWords(arr).concat(capitalized);
};

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words));
