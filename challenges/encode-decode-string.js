// Input: ['lint', 'code', 'love', 'you'];
// Output: ['lint', 'code', 'love', 'you'];

const encode = (arr) => {
	let encoded = '';
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i];
		const code1 = word.charCodeAt(word.length - 1);
		const code2 = arr[i + 1] ? arr[i + 1][0].charCodeAt(0) : '';
		const fullCode =
			i !== arr.length - 1 ? `[${fillZero(code1)}-${fillZero(code2)}]` : '';
		encoded += `${word}${fullCode}`;
	}
	return encoded;
};

const fillZero = (num) => {
	return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
};

const decode = (str) => {
	let decoded = [];
	let start = 0;
	for (let i = 0; i < str.length; i++) {
		let c = str[i];
		if (c === '[') {
			let [first, second] = str.slice(i + 1, i + 8).split('-');
			let code1 = str[i - 1]?.charCodeAt(0);
			let code2 = str[i + 9]?.charCodeAt(0);
			if (+first === code1 && +second === code2) {
				const validWord = str.slice(start, i);
				decoded.push(validWord);
				start = i + 9;
			}
		} else if (i === str.length - 1) {
			const lastWord = str.slice(start, i + 1);
			decoded.push(lastWord);
		}
	}
	return decoded;
};

const input = ['lint', 'code', 'love', 'you'];

console.log(decode(encode(input)));
