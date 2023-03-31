/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

const isPalindrome = (str) => {
	let l = 0;
	let r = str.length - 1;
	while (l <= r) {
		if (str[l] !== str[r]) return false;
		l++;
		r--;
	}

	return true;
};
