// Multiple Pointers - averagePair

/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * Bonus Constraints:
 * Time: O(N)
 * Space: O(1)
 */

const averagePair = (arr, target) => {
	let l = 0;
	let r = arr.length - 1;
	// [1, 3, 3, 5, 6, 7, 10, 12, 19], 8
	//  l                         r
	// 20 / 2 = 10
	// 10 > 8 r--
	// 10 < 8 l++
	while (l < r) {
		const avg = (arr[l] + arr[r]) / 2;
		if (avg === target) return true;
		else if (avg > target) r--;
		else if (avg < target) l++;
	}

	return false;
};

let result = averagePair([1, 2, 3], 2.5); // true
result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
result = averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
result = averagePair([], 4); // false

console.log(result);
