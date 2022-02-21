import { handleClickedPicType } from "../type/handleClickedPicType";
import { MouseCoord } from "../type/mouseCoord";
import { TargetLocation } from "../type/targetLocation";
import { checkInRange } from "./checkInRange";
import { findPercentageCoord } from "./findPercentageCoord";

export const checkCharMatch = (
	mouseCoord: MouseCoord,
	targetLocation: TargetLocation
) => {
	let charMatched = "";
	const { x, y } = mouseCoord;
	console.log(x);
	console.log(y);
	for (let i = 0; i < targetLocation.length; i++) {
		let xInRange = checkInRange(
			targetLocation[i].xStart,
			targetLocation[i].xEnd,
			x
		);
		let yInRange = checkInRange(
			targetLocation[i].yStart,
			targetLocation[i].yEnd,
			y
		);
		if (yInRange && xInRange) {
			charMatched = targetLocation[i].name;
			break;
		}
	}
	return charMatched;
};
