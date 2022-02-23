export const checkGameOver = (
	remainingTarget: {
		name: string;
		img: string;
	}[]
) => {
	console.log(remainingTarget.length);
	return remainingTarget.length === 0 ? true : false;
};
