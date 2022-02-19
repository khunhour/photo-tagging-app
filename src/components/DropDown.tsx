import React from "react";

interface Props {
	mouseCoord: { x: number; y: number };
}

const DropDown: React.FC<Props> = ({ mouseCoord }) => {
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
				<button>1</button>
				<button>2</button>
				<button>3</button>
			</div>
		</>
	);
};

export default DropDown;
