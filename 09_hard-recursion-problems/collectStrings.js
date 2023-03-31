/**
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 */

const collectStrings = (val) => {
	if (typeof val === 'string') return val;
	else if (typeof val === 'object') {
		let res = [];
		for (let key in val) {
			let collected = collectStrings(val[key]);
			if (Array.isArray(collected)) res = res.concat(collected);
			else if (typeof collected === 'string') res.push(collected);
		}
		return res;
	}
};

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz',
						test: 1,
					},
				},
			},
		},
	},
};

console.log(collectStrings(obj));
