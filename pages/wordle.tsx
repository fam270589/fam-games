import Link from "next/link";
import React from "react";
import styles from "../styles/Wordle.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Wordle component-----://
const Wordle = (props: Props) => {
	return (
		<div className={styles.container}>
			<Link href={"/"} className={styles.back}>
				<p>&larr; Back to Home</p>
			</Link>
			<h2>Wordle Game</h2>
		</div>
	);
};

export default Wordle;
