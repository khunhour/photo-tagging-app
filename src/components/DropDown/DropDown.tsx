import React from "react";
import "./DropDown.css";

interface Props {
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleCharSelection: (e: any) => void;
}

const DropDown: React.FC<Props> = ({
	mouseCoord,
	remainingTarget,
	handleCharSelection,
}) => {
	const position = {
		top: `${mouseCoord.y}%`,
		left: `${mouseCoord.x}%`,
	};
	return (
		<>
			<div className="marker" style={position}></div>
			<div className="drop-down" style={position}>
				{remainingTarget.map((target, index) => {
					return (
						<button
							key={index}
							id={target.name.toLowerCase()}
							onClick={() =>
								handleCharSelection(target.name.toLowerCase())
							}
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
