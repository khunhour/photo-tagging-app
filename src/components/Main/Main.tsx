import React from "react";
import DropDown from "../DropDown";
//css
import "./Main.css";
//image import
// import bgPhoto from "/images/cartoonnetwork.jpg";

//types
interface Props {
	showTarget: boolean;
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: React.MouseEventHandler<HTMLDivElement>;
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
				src="../../../images/cartoonnetwork.jpg"
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
