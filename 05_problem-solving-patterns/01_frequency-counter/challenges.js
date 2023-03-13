// Frequency Counter challenges

/**
 * 1. Anagrams
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

const validAnagram = (str1, str2) => {
	const repo1 = {};
	const repo2 = {};

	for (let char of str1) {
		repo1[char] = (repo1[char] || 0) + 1;
	}
	for (let char of str2) {
		repo2[char] = (repo2[char] || 0) + 1;
	}

	for (let key in repo1) {
		if (repo1[key] !== repo2[key]) return false;
	}

	return true;
};

// const result1 = validAnagram('aaz', 'zza');
