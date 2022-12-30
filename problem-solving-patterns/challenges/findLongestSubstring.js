/* 
  Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

// function findLongestSubstring(str) {
// 	let len = str.length,
// 		sum = 0,
// 		temp = 0;

// 	let repo = {};
//   let dublicates = [];

// 	for (let i = 0; i < len; i++) {
// 		let c = str[i];
// 		if (repo[c]) {
// 			let { indexes } = repo[c];
// 			let diff = i - indexes[indexes.length - 1];
// 			if (diff > repo[c].maxSub) repo[c].maxSub = diff;
// 			if (diff > sum) sum = diff;
// 			repo[c].indexes.push(i);
// 		} else {
// 			repo[c] = {
// 				char: c,
// 				indexes: [i],
// 				maxSub: 0,
// 			};
// 		}
// 	}

	// for (let c = 0; c < repo.length; c++) {
	// 	console.log('Last lien: ', str[len - 1]);
	// 	if (repo[c] !== str[len - 1]) {
	// 		let { indexes } = repo[c];
	// 		let toLastLine = len - indexes[indexes.length - 1];
	// 		if (toLastLine > repo[c].maxSub) repo[c].maxSub = toLastLine;
	// 		if (toLastLine > sum) sum = toLastLine;
	// 	}
	// }

	// Object.entries(repo).forEach(([key, value]) => {
	// 	// value.indexes.length > 1 && dublicates.push(value);
	// 	if (key !== str[len - 1]) {
	// 		let { indexes } = value;
	// 		let toLastLine = len - indexes[indexes.length - 1];
	// 		if (toLastLine > value.maxSub) value.maxSub = toLastLine;
	// 		if (toLastLine > sum) sum = toLastLine;
	// 	}
	// });

	// let maxSub = dublicates[0].indexes[0] + dublicates[0].indexes[1];

	// for (let i = 0; i < dublicates.length; i++) {
	// 	for (let j = 1; j < dublicates[i].indexes.length; j++) {}
	// }

	// console.log(repo);

	// for (let i = 0; i < str.length; i++) {
	// 	let char = str[i];
	// 	if (repo[char]) {
	// 		if (temp > sum) sum = temp;
	// 		temp = 0;
	// 		repo = {};
	// 		repo[char] = true;
	// 		// console.log(`Letter ${char} includes in`, repo);
	// 	} else {
	// 		repo[char] = true;
	// 		temp++;
	// 		// console.log(`Letter ${char} doesn't includes in`, repo);
	// 	}
	// }

	// return sum;
// }
// ! Failed

// ! SOLUTION

function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}