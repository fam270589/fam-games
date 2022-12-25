import { useContext } from "react";
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
  const wordleCtx = useContext(WordleContext);
	const letter = wordleCtx.board[attempVal][letterPos];

	return <div className={styles.letter}>{letter}</div>;
};

export default Letter;
