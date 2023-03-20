// Multiple Pointers - isSubsequence

/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * Your solution MUST have AT LEAST the following complexities:
 * Time Complexity - O(N + M)
 * Space Complexity - O(1)
 */

const isSubsequence = (str1, str2) => {
	let i = 0;

	let result = '';
	for (let j = 0; j < str2.length; j++) {
		if (str2[j] === str1[i]) {
			result += str2[j];
			i++;
		}
	}

	if (result === str1) return true;
	return false;
};

// let result = isSubsequence('hello', 'hello world'); // true
// result = isSubsequence('sing', 'sting'); // true
// result = isSubsequence('abc', 'abracadabra'); // true
// result = isSubsequence('abc', 'acb'); // false (order matters)

// console.log(result);
