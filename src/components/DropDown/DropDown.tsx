import React from "react";
import "./DropDown.css";

interface Props {
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
}

const DropDown: React.FC<Props> = ({ mouseCoord, remainingTarget }) => {
	console.log(remainingTarget);
	return (
		<>
			<div
				className="target-circle"
				style={{ top: mouseCoord.y - 30, left: mouseCoord.x - 30 }}
			></div>
			<div
				className="drop-down"
				style={{ top: mouseCoord.y + 20, left: mouseCoord.x + 20 }}
			>
				{remainingTarget.map((target, index) => {
					return (
						<button key={index}>
							<div className="img-container">
								<img
									src={require(target.img)}
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
