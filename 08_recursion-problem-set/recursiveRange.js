const recursiveRange = (n) => {
	if (!n) return 0;
	return n + recursiveRange(n - 1);
};

console.log(recursiveRange(10));
