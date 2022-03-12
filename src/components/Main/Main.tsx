import React from "react";

//component
import Alert from "../Alert/Alert";
import DropDown from "../DropDown/DropDown";
//css
import "./Main.css";

//types
interface Props {
	showMarker: boolean;
	mouseCoord: { x: number; y: number };
	showAlert: string;
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: (e: any) => void;
	handleCharSelection: (e: any) => void;
}

const Main: React.FC<Props> = ({
	showMarker,
	mouseCoord,
	remainingTarget,
	showAlert,
	handleClickedPic,
	handleCharSelection,
}) => {
	return (
		<div
			className="img-container"
			onClick={handleClickedPic}
			data-testid="main"
		>
			<img
				src={require("../../images/cartoonnetwork.jpg")}
				alt="wheres-waldo-pic"
			/>
			{showMarker && (
				<DropDown
					mouseCoord={mouseCoord}
					remainingTarget={remainingTarget}
					handleCharSelection={handleCharSelection}
				/>
			)}
			<Alert showAlert={showAlert} />
		</div>
	);
};

export default Main;
