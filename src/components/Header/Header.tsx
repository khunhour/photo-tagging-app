import React from "react";
//css
import "./Header.css";

//type
interface Props {
	remainingTargetNum: number;
}

const Header: React.FC<Props> = ({ remainingTargetNum }) => {
	return (
		<header>
			<div className="logo">Seek&Find</div>
			<div className="timer">Timer</div>
			<div className="target">{remainingTargetNum}</div>
		</header>
	);
};

export default Header;
