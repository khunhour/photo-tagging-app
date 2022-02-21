import React from "react";
//css
import "./Header.css";

//type
interface Props {
	remainingTarget: { name: string; img: string }[];
}

const Header: React.FC<Props> = ({ remainingTarget }) => {
	return (
		<header>
			<div className="logo">Seek&Find</div>
			<div className="timer">Timer</div>
			<div className="target">{remainingTarget.length}</div>
		</header>
	);
};

export default Header;
