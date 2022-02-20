type Range = {
	start: number;
	end: number;
};
// check if x is within the range provided
export const checkInRange = (range: Range, x: number) => {
	if (x >= range.start && x <= range.end) {
		return true;
	}
	return false;
};
