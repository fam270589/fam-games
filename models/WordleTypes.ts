export type ContextType = {
	board: string[][];
	setBoard?: React.Dispatch<React.SetStateAction<string[][]>>;
	currAttempt: { attempt: number; letterPos: number };
	setCurrAttempt?: React.Dispatch<
		React.SetStateAction<{
			attempt: number;
			letterPos: number;
		}>
	>;
	onSelectLetter: (keyVal: string) => void;
	onDelete: () => void;
	onEnter: () => void;
	correctWord: string;
	disabledLetters: string[];
	setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>;
	gameOver: {
		gameOver: boolean;
		guessedWord: boolean;
	};
	setGameOver: React.Dispatch<
		React.SetStateAction<{
			gameOver: boolean;
			guessedWord: boolean;
		}>
	>;
};
