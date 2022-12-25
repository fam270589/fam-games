import Link from "next/link";
import React, { useEffect, useState } from "react";
import Board from "../components/wordle/Board";
import GameOver from "../components/wordle/GameOver";
import Keyboard from "../components/wordle/Keyboard";
import { defaultBoard, generateWordSet } from "../data/Words";
import { ContextType } from "../models/WordleTypes";
import styles from "../styles/Wordle.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

export const WordleContext = React.createContext<ContextType>({
	board: [[]],
	currAttempt: { attempt: 0, letterPos: 0 },
	onSelectLetter: () => {},
	onDelete: () => {},
	onEnter: () => {},
	correctWord: "",
	disabledLetters: [],
	setDisabledLetters: () => {},
	gameOver: {
		gameOver: false,
		guessedWord: false,
	},
	setGameOver: () => {},
});

//todo:-----Wordle component-----://
const Wordle = (props: Props) => {
	const [board, setBoard] = useState(defaultBoard);
	const [correctWord, setCorrectWord] = useState("");
	const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
	const [wordSet, setWordSet] = useState(new Set());
	const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
	const [gameOver, setGameOver] = useState({
		gameOver: false,
		guessedWord: false,
	});

	useEffect(() => {
		generateWordSet().then((words) => {
			if (words.wordSet) setWordSet(words.wordSet);
			if (words.todaysWord) {
				setCorrectWord(words.todaysWord);
			}
		});

		return () => {};
	}, []);

	const onSelectLetter = (keyVal: string) => {
		if (currAttempt.letterPos > 4) return;

		const newBoard = [...board];
		newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;

		if (keyVal.length > 1) return; // if Enter or Delete
		if (setBoard) setBoard(newBoard);
		if (setCurrAttempt) {
			setCurrAttempt({
				...currAttempt,
				letterPos: currAttempt.letterPos + 1,
			});
		}
	};

	const onDelete = () => {
		if (currAttempt.letterPos === 0) return;

		const newBoard = [...board];
		newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";

		if (setBoard) setBoard(newBoard);
		if (setCurrAttempt) {
			setCurrAttempt({
				...currAttempt,
				letterPos: currAttempt.letterPos - 1,
			});
		}
	};

	const onEnter = () => {
		if (currAttempt.letterPos !== 5) return;

		let currentWord = "";
		for (let i = 0; i < 5; i++) {
			currentWord += board[currAttempt.attempt][i];
		}

		// // if current input not a word
		// if (wordSet.has(currentWord.toLowerCase())) {
		// 	if (setCurrAttempt) {
		// 		setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
		// 	}
		// } else {
		// 	alert("Word not found");
		// }

		if (setCurrAttempt) {
			setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
		}

		if (currentWord === correctWord) {
			setGameOver({ gameOver: true, guessedWord: true });
			return;
		}

		if (currAttempt.attempt === 5) {
			setGameOver({ gameOver: true, guessedWord: false });
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link href={"/"} className={styles.back}>
					<p>&larr; Back to Home</p>
				</Link>
				<h2>Wordle</h2>
				<WordleContext.Provider
					value={{
						board,
						setBoard,
						currAttempt,
						setCurrAttempt,
						onSelectLetter,
						onDelete,
						onEnter,
						correctWord,
						disabledLetters,
						setDisabledLetters,
						gameOver,
						setGameOver,
					}}
				>
					<div className={styles.theGame}>
						<Board />

						{gameOver.gameOver ? <GameOver /> : <Keyboard />}
						<button
							className={styles.reset}
							onClick={() => window.location.reload()}
						>
							Reset
						</button>
					</div>
				</WordleContext.Provider>
			</div>
		</div>
	);
};

export default Wordle;
