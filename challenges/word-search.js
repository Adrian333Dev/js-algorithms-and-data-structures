/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
	let result = false;
	const repo = {};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const c = board[i][j];
			if (repo[c] === undefined) {
				repo[c] = [[i, j]];
			} else {
				repo[c].push([i, j]);
			}
		}
	}
	// console.log(repo);

	if (repo[word[0]]) {
		let list = repo[word[0]];
		let listIdx = 0;

		for (let k = 0; k < list.length; k++) {
			console.log('Loop: ', k + 1);
			let [row, col] = list[listIdx];
			let forbidded = { [`${row}-${col}`]: true };
			let wordIdx = 1;
			let str = board[row][col];
			while (wordIdx < word.length) {
				console.log({ row, col });
				console.log('Char:', word[wordIdx]);
				if (
					!forbidded[`${row - 1}-${col}`] &&
					board[row - 1]?.[col] == word[wordIdx]
				) {
					forbidded[`${row - 1}-${col}`] = true;
					console.log('UP: ', board[row - 1][col]);
					str += board[row - 1][col];
					row--;
					wordIdx++;
				} else if (
					!forbidded[`${row}-${col + 1}`] &&
					board[row]?.[col + 1] == word[wordIdx]
				) {
					forbidded[`${row}-${col + 1}`] = true;
					console.log('RIGHT: ', board[row][col + 1]);
					str += board[row][col + 1];
					col++;
					wordIdx++;
				} else if (
					!forbidded[`${row + 1}-${col}`] &&
					board[row + 1]?.[col] == word[wordIdx]
				) {
					forbidded[`${row + 1}-${col}`] = true;
					console.log('DOWN: ', board[row + 1][col]);
					str += board[row + 1][col];
					row++;
					wordIdx++;
				} else if (
					!forbidded[`${row}-${col - 1}`] &&
					board[row]?.[col - 1] == word[wordIdx]
				) {
					console.log('LEFT: ', board[row][col - 1]);
					str += board[row][col - 1];
					forbidded[`${row}-${col - 1}`] = true;
					col--;
					wordIdx++;
				} else {
					listIdx++;
					break;
				}
			}
			console.log(forbidded);
			console.log('str: ', str);
			if (str == word) return true;
		}
	}
	return result;
};

let board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
let word = 'ABCCED';

board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
word = 'ABCB';

board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
word = 'SEE';

console.log(exist(board, word));
