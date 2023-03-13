// Frequency Counter / Multiple Pointers - areThereDuplicates

/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and  checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * Restrictions:
 * Time: O(N)
 * Space: O(N)
 * Bonus:
 * Time: O(N log N)
 * Space: O(1)
 */

const areThereDuplicates = (...args) => {
	return new Set(args).size !== args.length;
};

let result = areThereDuplicates(1, 2, 3); // false
result = areThereDuplicates(1, 2, 2); // true
result = areThereDuplicates('a', 'b', 'c', 'a'); // true

console.log(result);
