// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
	let freqCount1 = {};
	let freqCount2 = {};

	while (num1 > 0) {
		let n = num1 % 10;
		freqCount1[n] = (freqCount1[n] || 0) + 1;
		num1 = Math.floor(num1 / 10);
	}
	while (num2 > 0) {
		let n = num2 % 10;
		freqCount2[n] = (freqCount2[n] || 0) + 1;
		num2 = Math.floor(num2 / 10);
	}

	for (let key in freqCount1) {
		if (freqCount1[key] !== freqCount2[key]) return false;
	}

	return true;
}

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
