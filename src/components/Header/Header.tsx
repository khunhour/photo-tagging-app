import React from "react";
//css
import "./Header.css";

//type
interface Props {
	remainingTarget: { name: string; img: string }[];
	count: number;
}

const Header: React.FC<Props> = ({ remainingTarget, count }) => {
	let date = new Date(count * 1000).toISOString().substring(11, 19);

	return (
		<header>
			<div className="logo">
				<img src={require("../../images/searching.png")} alt="logo" />
				<h2 className="logo">Seek&Find</h2>
			</div>
			<h2 className="timer">{date}</h2>
			<h2 className="target">{remainingTarget.length}</h2>
		</header>
	);
};

export default Header;
