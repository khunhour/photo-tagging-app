import { handleClickedPicType } from "../type/handleClickedPicType";

export const findCoord = (e: handleClickedPicType) => {
	//x percentage relative to img-container
	let x =
		Math.floor(
			((e.pageX - e.currentTarget.offsetLeft) /
				e.currentTarget.offsetWidth) *
				10000
		) / 100;
	//y percentage relative to img-container
	let y =
		Math.floor(
			((e.pageY - e.currentTarget.offsetTop) /
				e.currentTarget.offsetHeight) *
				10000
		) / 100;
	return { x, y };
};
