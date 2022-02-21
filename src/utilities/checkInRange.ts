// check if x is within the range provided
export const checkInRange = (xStart: number, xEnd: number, x: number) => {
	if (x >= xStart && x <= xEnd) {
		return true;
	}
	return false;
};
