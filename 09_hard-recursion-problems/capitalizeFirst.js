/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

const capitalizeFirst = (arr) => {
	let result = [];
	if (!arr.length) return [];
	let str = arr.pop();
	let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
	return capitalizeFirst(arr).concat(capitalized);
};

console.log(capitalizeFirst(['car', 'taco', 'banana']));
