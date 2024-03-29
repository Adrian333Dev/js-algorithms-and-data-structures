/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

const someRecursive = (arr, cb) => {
	if (!arr.length) return false;
	const isTrue = cb(arr.pop());
	if (isTrue) return true;
	return someRecursive(arr, cb);
};

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([4, 6, 8], (val) => val > 10));
