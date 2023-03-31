const productOfArray = (arr) => {
	if (!arr.length) return 1;
	return arr.pop() * productOfArray(arr);
};

console.log(productOfArray([1, 2, 3]));
