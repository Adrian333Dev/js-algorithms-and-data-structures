/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

const reverse = (str) => {
	if (!str.length) return '';
	return str[str.length - 1] + reverse(str.slice(0, -1));
};

console.log(reverse('rithmschool'));