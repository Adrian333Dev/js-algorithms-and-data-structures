const stringifyNumbers = (obj) => {
	if (typeof obj === 'number') return obj + '';
	else if (typeof obj === 'object') {
		for (let key in obj) {
			obj[key] = stringifyNumbers(obj[key]);
		}
	} else if (Array.isArray(obj)) {
		for (let index in obj) {
			obj[index] = stringifyNumbers(obj[index]);
		}
	}
	return obj;
};

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
			test: {
				value: 1232,
			},
		},
	},
};

console.log(stringifyNumbers(obj));
