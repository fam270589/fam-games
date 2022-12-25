export type ContextType = {
	board: string[][];
	setBoard?: React.Dispatch<React.SetStateAction<string[][]>>;
	currAttempt: { attempt: number; letterPos: number };
	setCurrAttempt?: React.Dispatch<
		React.SetStateAction<{
			attempt: number;
			letterPos: number;
		}>
	>;
};
