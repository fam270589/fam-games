import { useContext } from "react";
import { WordleContext } from "../../pages/wordle";
import styles from "./Key.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	keyVal: string;
	disabled?: boolean;
};

//todo:-----Key component-----://
const Key = ({ keyVal, disabled }: Props) => {
	const { onSelectLetter, onDelete, onEnter } = useContext(WordleContext);

	const selectLetter = () => {
		if (keyVal === "ENTER") {
			onEnter();
		} else if (keyVal === "DELETE") {
			onDelete();
		} else {
			onSelectLetter(keyVal);
		}
	};

	return (
		<div
			className={
				keyVal.length > 1
					? styles.word
					: disabled
					? styles.disabled
					: styles.key
			}
			onClick={selectLetter}
		>
			{keyVal}
		</div>
	);
};

export default Key;
