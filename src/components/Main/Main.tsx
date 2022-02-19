import React from "react";
import DropDown from "../DropDown";
//css
import "./Main.css";
//components

interface Props {
	showTarget: boolean;
	mouseCoord: { x: number; y: number };
	handleClickedPic: React.MouseEventHandler<HTMLDivElement>;
}

const Main: React.FC<Props> = ({
	showTarget,
	mouseCoord,
	handleClickedPic,
}) => {
	return (
		<div className="img-container" onClick={handleClickedPic}>
			<img src="/images/cartoonnetwork.jpg" alt="pic" />
			{showTarget ? <DropDown mouseCoord={mouseCoord} /> : null}
		</div>
	);
};

export default Main;
