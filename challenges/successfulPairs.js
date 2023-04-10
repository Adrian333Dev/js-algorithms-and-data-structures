/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

const successfulPairs = (spells, potions, success) => {
	potions.sort();
	const res = [];
	const repo = {};

	let min = 0;

	for (let s of spells) {
	}

	return res;
};

// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]
// Explanation:
// - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
// - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
// - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
// Thus, [4,0,3] is returned.

const spells = [5, 1, 3],
	potions = [1, 2, 3, 4, 5],
	success = 7;

// console.log(successfulPairs(spells, potions, success));

const findMedianSortedArrays = (nums1, nums2) => {};

const merge = (arr1, arr2) => {
};

const arr1 = [-5, 3, 6, 12, 15]; // 20 // 5
const arr2 = [-12, -10, -6, -3, 4, 10]; // 22 // 6
const merged = [-12, -10, -6, -5, -3, 3, 4, 6, 10, 12, 15]; // 27
