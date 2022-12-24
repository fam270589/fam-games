import { IMemoryItem } from "../../models/MemoryTypes";
import styles from "./Card.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	idx: number;
	item: IMemoryItem;
	onClick: () => void;
};

//todo:-----Cards component-----://
const Cards = (props: Props) => {
	return (
		<div className={styles.container} onClick={props.onClick}>
			<p className={props.item.stat ? styles.correct : styles.num}>
				{props.item.num}
			</p>
		</div>
	);
};

export default Cards;
