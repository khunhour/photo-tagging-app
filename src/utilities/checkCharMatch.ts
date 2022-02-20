import { handleClickedPicType } from "../type/handleClickedPicType";
import { TargetLocation } from "../type/targetLocation";
import { checkInRange } from "./checkInRange";
import { findPercentageCoord } from "./findPercentageCoord";

export const checkCharMatch = (
	e: handleClickedPicType,
	targetLocation: TargetLocation | undefined
) => {
	const { x, y } = findPercentageCoord(e);

	for (let key in targetLocation) {
		console.log(key);
	}
};
