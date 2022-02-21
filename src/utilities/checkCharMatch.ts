import { handleClickedPicType } from "../type/handleClickedPicType";
import { MouseCoord } from "../type/mouseCoord";
import { TargetLocation } from "../type/targetLocation";
import { checkInRange } from "./checkInRange";
import { findPercentageCoord } from "./findPercentageCoord";

export const checkCharMatch = (
	id: string,
	mouseCoord: MouseCoord,
	targetLocation: TargetLocation
) => {
	let charMatched = "";
	const { x, y } = mouseCoord;
	targetLocation.forEach((obj) => {
		if (obj.name === id) {
			let xInRange = checkInRange(obj.xStart, obj.xEnd, x);
			let yInRange = checkInRange(obj.yStart, obj.yEnd, y);
			if (yInRange && xInRange) {
				charMatched = obj.name;
			}
		} else return;
	});

	return charMatched;
};
