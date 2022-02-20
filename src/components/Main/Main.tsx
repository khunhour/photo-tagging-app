import React from "react";
import DropDown from "../DropDown/DropDown";
//css
import "./Main.css";

//types
interface Props {
	showTarget: boolean;
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: (e: any) => void;
}

const Main: React.FC<Props> = ({
	showTarget,
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
			{showTarget ? (
				<DropDown
					mouseCoord={mouseCoord}
					remainingTarget={remainingTarget}
				/>
			) : null}
		</div>
	);
};

export default Main;
