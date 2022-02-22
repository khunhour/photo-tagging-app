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
			<div className="logo">
				<img src={require("../../images/searching.png")} />
				<h2 className="logo">Seek&Find</h2>
			</div>
			<h2 className="timer">Timer</h2>
			<h2 className="target">{remainingTarget.length}</h2>
		</header>
	);
};

export default Header;
