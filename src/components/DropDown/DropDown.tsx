import React from "react";
import { handleClickedPicType } from "../../type/handleClickedPicType";
import "./DropDown.css";

interface Props {
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleCharSelection: (e: handleClickedPicType) => void;
}

const DropDown: React.FC<Props> = ({
	mouseCoord,
	remainingTarget,
	handleCharSelection,
}) => {
	return (
		<>
			<div
				className="marker"
				style={{ top: mouseCoord.y - 30, left: mouseCoord.x - 30 }}
			></div>
			<div
				className="drop-down"
				style={{ top: mouseCoord.y + 20, left: mouseCoord.x + 20 }}
			>
				{remainingTarget.map((target, index) => {
					return (
						<button
							key={index}
							id={target.name.toLowerCase()}
							onClick={handleCharSelection}
						>
							<div className="img-container">
								<img
									src={require("/src/images/" + target.img)}
									alt="character"
								/>
							</div>
							<div> {target.name}</div>
						</button>
					);
				})}
			</div>
		</>
	);
};

export default DropDown;
