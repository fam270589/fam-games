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

	return (
		<div className={styles.keyboard}>
			<div className={styles.line}>
				{keys1.map((key) => (
					<Key key={key} keyVal={key} />
				))}
			</div>
			<div className={styles.line}>
				{keys2.map((key) => (
					<Key key={key} keyVal={key} />
				))}
			</div>
			<div className={styles.line}>
				<Key keyVal="ENTER" />
				{keys3.map((key) => (
					<Key key={key} keyVal={key} />
				))}
				<Key keyVal="DELETE" />
			</div>
		</div>
	);
};

export default Keyboard;
