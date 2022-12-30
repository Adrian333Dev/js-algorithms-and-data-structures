/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(s1, s2) {
	let i = 0;

	let result = '';
	for (let j = 0; j < s2.length; j++) {
		if (s2[j] === s1[i]) {
			result += s2[j];
			i++;
		}
	}

	if (result === s1) return true;
	return false;
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
