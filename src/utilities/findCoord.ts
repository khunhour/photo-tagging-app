import { handleClickedPicType } from "../type/handleClickedPicType";

export const findCoord = (e: handleClickedPicType) => {
	let x =
		Math.floor(
			((e.pageX - e.currentTarget.offsetLeft) /
				e.currentTarget.offsetWidth) *
				10000
		) / 100;
	let y =
		Math.floor(
			((e.pageY - e.currentTarget.offsetTop) /
				e.currentTarget.offsetHeight) *
				10000
		) / 100;
	console.log("-------------");
	console.log();
	return { x, y };
};
