import { useContext, useEffect } from "react";
import { WordleContext } from "../../pages/wordle";
import styles from "./Letter.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	letterPos: number;
	attempVal: number;
};

//todo:-----Letter component-----://
const Letter = ({ attempVal, letterPos }: Props) => {
	const {
		board,
		correctWord,
		currAttempt,
		disabledLetters,
		setDisabledLetters,
	} = useContext(WordleContext);
	const letter = board[attempVal][letterPos];

	const correct = correctWord[letterPos] === letter;
	const almost = !correct && letter !== "" && correctWord.includes(letter);

	const letterState =
		currAttempt.attempt > attempVal
			? correct
				? styles.correct
				: almost
				? styles.almost
				: styles.error
			: styles.default;

	useEffect(() => {
		if (letter !== "" && !correct && !almost) {
			setDisabledLetters((prevState) => [...prevState, letter]);
		}

		return () => {};
	}, [currAttempt.attempt]);

	return (
		<div className={styles.letter} id={letterState}>
			{letter}
		</div>
	);
};

export default Letter;
