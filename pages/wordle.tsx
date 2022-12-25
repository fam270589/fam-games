import Link from "next/link";
import React, { useState } from "react";
import Board from "../components/wordle/Board";
import Keyboard from "../components/wordle/Keyboard";
import { defaultBoard } from "../data/Words";
import { ContextType } from "../models/WordleTypes";
import styles from "../styles/Wordle.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

export const WordleContext = React.createContext<ContextType>({
	board: [[]],
	currAttempt: {attempt: 0, letterPos: 0}
});

//todo:-----Wordle component-----://
const Wordle = (props: Props) => {
	const [board, setBoard] = useState(defaultBoard);
	const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link href={"/"} className={styles.back}>
					<p>&larr; Back to Home</p>
				</Link>
				<h2>Wordle</h2>
				<WordleContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt }}>
					<div className={styles.theGame}>
						<Board />
						<Keyboard />
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
