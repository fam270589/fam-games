import Link from "next/link";
import React from "react";
import styles from "../styles/Sudoku.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Sudoku component-----://
const Sudoku = (props: Props) => {
	return (
		<div className={styles.container}>
			<Link href={"/"} className={styles.back}>
				<p>&larr; Back to Home</p>
			</Link>
			<h2>Sudoku Game</h2>
		</div>
	);
};

export default Sudoku;
