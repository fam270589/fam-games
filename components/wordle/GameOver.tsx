import { useContext } from "react";
import { WordleContext } from "../../pages/wordle";
import styles from "./GameOver.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----GameOver component-----://
const GameOver = (props: Props) => {
	const { gameOver, setGameOver, correctWord, currAttempt } =
		useContext(WordleContext);

	return (
		<div className={styles.gameOver}>
			<h3>{gameOver.guessedWord ? "You are correct!!" : "You failed!!"}</h3>
			<h1 className={styles.title}>The word is: {correctWord}</h1>
			{gameOver.guessedWord && (
				<h3>You guessed in {currAttempt.attempt} attempts</h3>
			)}
		</div>
	);
};

export default GameOver;
