import { handleClickedPicType } from "../type/handleClickedPicType";
import { TargetLocation } from "../type/targetLocation";
import { checkInRange } from "./checkInRange";
import { findPercentageCoord } from "./findPercentageCoord";

export const checkCharMatch = (
	e: handleClickedPicType,
	targetLocation: TargetLocation
) => {
	const { x, y } = findPercentageCoord(e);
	console.log(targetLocation);
	console.log(Object.keys(targetLocation));
};
