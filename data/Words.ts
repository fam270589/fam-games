export const defaultBoard = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

export const generateWordSet = async () => {
	let wordSet;
	let todaysWord;

	await fetch("./words.json")
		.then((resp) => resp.json())
		.then((resp: string[]) => {
			todaysWord = resp[Math.floor(Math.random() * resp.length)].toUpperCase();
			wordSet = new Set(resp);
			console.log(todaysWord);
		});

	return { wordSet, todaysWord };
};
