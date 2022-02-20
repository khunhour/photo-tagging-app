import React from "react";
import DropDown from "../DropDown/DropDown";
//css
import "./Main.css";

//types
interface Props {
	showMarker: boolean;
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: (e: any) => void;
}

const Main: React.FC<Props> = ({
	showMarker,
	mouseCoord,
	remainingTarget,
	handleClickedPic,
}) => {
	return (
		<div className="img-container" onClick={handleClickedPic}>
			<img
				src={require("../../images/cartoonnetwork.jpg")}
				alt="wheres-waldo-pic"
			/>
			{showMarker ? (
				<DropDown
					mouseCoord={mouseCoord}
					remainingTarget={remainingTarget}
				/>
			) : null}
		</div>
	);
};

export default Main;
