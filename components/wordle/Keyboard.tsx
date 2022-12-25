import { useCallback, useContext, useEffect } from "react";
import { WordleContext } from "../../pages/wordle";
import Key from "./Key";
import styles from "./Keyboard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Keyboard component-----://
const Keyboard = (props: Props) => {
	const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

	const { onSelectLetter, onDelete, onEnter, disabledLetters } =
		useContext(WordleContext);

	const handleKeyboard = useCallback(
		(event?: KeyboardEvent) => {
			if (event) {
				if (event.key === "Enter") {
					onEnter();
				} else if (event.key === "Backspace") {
					onDelete();
				} else {
					keys1.forEach((key) => {
						if (event.key.toUpperCase() === key) {
							onSelectLetter(key);
						}
					});
					keys2.forEach((key) => {
						if (event.key.toUpperCase() === key) {
							onSelectLetter(key);
						}
					});
					keys3.forEach((key) => {
						if (event.key.toUpperCase() === key) {
							onSelectLetter(key);
						}
					});
				}
			}
		},
		[onSelectLetter, onDelete, onEnter]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard);

		return () => {
			document.removeEventListener("keydown", handleKeyboard);
		};
	}, [handleKeyboard]);

	return (
		<div
			className={styles.keyboard}
			onKeyDown={() => {
				handleKeyboard();
			}}
		>
			<div className={styles.line}>
				{keys1.map((key) => (
					<Key
						key={key}
						keyVal={key}
						disabled={disabledLetters.includes(key)}
					/>
				))}
			</div>
			<div className={styles.line}>
				{keys2.map((key) => (
					<Key
						key={key}
						keyVal={key}
						disabled={disabledLetters.includes(key)}
					/>
				))}
			</div>
			<div className={styles.line}>
				<Key keyVal="ENTER" />
				{keys3.map((key) => (
					<Key
						key={key}
						keyVal={key}
						disabled={disabledLetters.includes(key)}
					/>
				))}
				<Key keyVal="DELETE" />
			</div>
		</div>
	);
};

export default Keyboard;
