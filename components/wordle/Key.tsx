import { useContext } from "react";
import { WordleContext } from "../../pages/wordle";
import styles from "./Key.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	keyVal: string;
};

//todo:-----Key component-----://
const Key = ({ keyVal }: Props) => {
	const { board, setBoard, currAttempt, setCurrAttempt } =
		useContext(WordleContext);

	const selectLetter = () => {
		if (keyVal === "ENTER") {
			if (currAttempt.letterPos !== 5) return;

			if (setCurrAttempt) {
				setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
			}
		} else if (keyVal === "DELETE") {
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
		} else {
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
		}
	};

	return (
		<div
			className={keyVal.length > 1 ? styles.word : styles.key}
			onClick={selectLetter}
		>
			{keyVal}
		</div>
	);
};

export default Key;
