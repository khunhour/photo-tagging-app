import React from "react";

interface Props {
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
}

const DropDown: React.FC<Props> = ({ mouseCoord, remainingTarget }) => {
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
							<img src={target.img} alt="character" />
							<div> {target.name}</div>
						</button>
					);
				})}
			</div>
		</>
	);
};

export default DropDown;
