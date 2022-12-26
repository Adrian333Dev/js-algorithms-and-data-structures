// * Challende 1

// ! Naive solution - O(n²)
// function same() {
// 	if (arr1.length > arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++) {
// 		let index = arr2.indexOf(arr1[i] ** 2);
// 		if (index === -1) return false;
// 		arr2.splice(index, 1);
// 	}

// 	return true;
// }

// ! Refactor - O(n)
// function same() {
// 	if (arr1.length !== arr2.length) return false;

// 	let freqCount1 = {};
// 	let freqCount2 = {};

// 	for (let i of arr1) {
// 		freqCount1[i] = (freqCount1[i] || 0) + 1;
// 	}
// 	for (let i of arr2) {
// 		freqCount2[i] = (freqCount2[i] || 0) + 1;
// 	}

// 	for (let key in freqCount1) {
// 		if (!(key ** 2 in freqCount2)) {
// 			return false;
// 		}
// 		if (freqCount2[key ** 2] !== freqCount1[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// * Challenge 2
// ! Solution 1 - O(n)
function validAnagram(s1, s2) {
	if (s1.length !== s2.length) return false;

	let freqCount1 = {};
	let freqCount2 = {};

	for (let i of s1) {
		freqCount1[i] = (freqCount1[i] || 0) + 1;
	}
	for (let i of s2) {
		freqCount2[i] = (freqCount2[i] || 0) + 1;
	}
	for (let val in freqCount1) {
		if (freqCount1[val] !== freqCount2[val]) return false;
	}
	return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagarma'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
