// * Challenge 1

/* 
  Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// ! My Solution - O(n²)
// function sumZero(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === 0) {
// 				return [arr[i], arr[j]];
// 			}
// 		}
// 	}
// 	return undefined;
// }

// ! Better Solution - O(n)
function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// * Challenge 2

/*
  Implement a function called, countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// ! My Solution - O(n)
function countUniqueValues(arr) {
	let count = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) count++;
  }
  if (arr[arr.length - 1] !== arr[arr.length]) count++;
	return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
