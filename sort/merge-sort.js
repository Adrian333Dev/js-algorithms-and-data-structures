const merge = (arr1, arr2) => {
	let first = 0,
		second = 0;

	let res = [];

	while (arr1.length + arr2.length > res.length) {
		if (arr1[first] <= arr2[second] || second >= arr2.length) {
			res.push(arr1[first]);
			first++;
		} else if (arr1[first] > arr2[second] || first >= arr1.length) {
			res.push(arr2[second]);
			second++;
		}
	}

	return res;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	const mid = Math.ceil(arr.length / 2);
	const arr1 = mergeSort(arr.slice(0, mid));
	const arr2 = mergeSort(arr.slice(mid, arr.length));
	return merge(arr1, arr2);
};

const arr = [6, 6, 2, 5, 1, 11, 1, 854, 2, 1, 5, 8, 00, 754, 24, 123];

console.log(mergeSort(arr));
