import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cards from "../components/memory/Card";
import { IMemoryItem } from "../models/MemoryTypes";
import styles from "../styles/Memory.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Memory component-----://
const Memory = (props: Props) => {
	const [items, setItems] = useState<IMemoryItem[]>();
	const [prev, setPrev] = useState(-1);
	const [seen, setSeen] = useState<Set<number>>(new Set());

	useEffect(() => {
		const initialItems: IMemoryItem[] = [
			{ id: 1, num: "1", stat: "" },
			{ id: 1, num: "1", stat: "" },
			{ id: 2, num: "2", stat: "" },
			{ id: 2, num: "2", stat: "" },
			{ id: 3, num: "3", stat: "" },
			{ id: 3, num: "3", stat: "" },
			{ id: 4, num: "4", stat: "" },
			{ id: 4, num: "4", stat: "" },
			{ id: 5, num: "5", stat: "" },
			{ id: 5, num: "5", stat: "" },
			{ id: 6, num: "6", stat: "" },
			{ id: 6, num: "6", stat: "" },
			{ id: 7, num: "7", stat: "" },
			{ id: 7, num: "7", stat: "" },
			{ id: 8, num: "8", stat: "" },
			{ id: 8, num: "8", stat: "" },
		];

		setItems(initialItems.sort(() => Math.random() - 0.5));

		return () => {};
	}, []);

	const check = (current: number) => {
		if (items) {
			if (items[current].id === items[prev].id) {
				items[current].stat = "correct";
				items[prev].stat = "correct";
				setItems([...items]);
				seen.add(current);
				seen.add(prev);
				setPrev(-1);
			} else {
				items[current].stat = "wrong";
				items[prev].stat = "wrong";
				setItems([...items]);
				setTimeout(() => {
					items[current].stat = "";
					items[prev].stat = "";
					setItems([...items]);
					setPrev(-1);
				}, 10);
			}
		}
	};

	const handleCardClick = (id: number) => {
		if (!items) return;
		if (id === prev) return;
		if (seen.has(id)) return;

		if (prev === -1) {
			items[id].stat = "active";
			setItems([...items]);
			setPrev(id);
		} else {
			check(id);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link href={"/"} className={styles.back}>
					<p>&larr; Back to Home</p>
				</Link>
				<h2>Memory Game</h2>
				<div className={styles.theGame}>
					<div className={styles.gameGrid}>
						{items &&
							items.map((item, idx) => (
								<Cards
									onClick={() => {
										handleCardClick(idx);
									}}
									key={idx}
									item={item}
									idx={idx}
								/>
							))}
					</div>
					<button
						className={styles.reset}
						onClick={() => window.location.reload()}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default Memory;
