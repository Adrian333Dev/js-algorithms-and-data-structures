// Frequency Counter - sameFrequency

/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 */

const sameFrequency = (num1, num2) => {
	const repo1 = {};
	const repo2 = {};

	while (num1 > 0 || num2 > 0) {
		repo1[num1 % 10] = (repo1[num1 % 10] || 0) + 1;
		repo2[num2 % 10] = (repo2[num2 % 10] || 0) + 1;

		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
	}

	for (let key in repo1) {
		if (repo1[key] !== repo2[key]) return false;
  }
  
  console.log({repo1, repo2});

	return true;
};

let result = sameFrequency(182, 281); // true
result = sameFrequency(34, 14); // false
result = sameFrequency(3589578, 5879385); // true
result = sameFrequency(22, 222); // false

console.log(result);
