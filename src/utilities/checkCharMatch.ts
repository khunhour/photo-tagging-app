import { MouseCoordType } from "../type/mouseCoordType";
import { TargetLocationType } from "../type/targetLocationType";
import { checkInRange } from "./checkInRange";

export const checkCharMatch = (
	id: string,
	mouseCoord: MouseCoordType,
	targetLocation: TargetLocationType
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
