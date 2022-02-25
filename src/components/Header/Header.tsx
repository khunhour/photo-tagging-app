import React from "react";
import { formatSeconds } from "../../utilities/formatSeconds";
//css
import "./Header.css";

//type
interface Props {
	remainingTarget: { name: string; img: string }[];
	count: number;
}

const Header: React.FC<Props> = ({ remainingTarget, count }) => {
	return (
		<header>
			<div className="logo">
				<img src={require("../../images/searching.png")} alt="logo" />
				<h2 className="logo">Seek&Find</h2>
			</div>
			<h2 className="timer">{formatSeconds(count)}</h2>
			<h2 className="target">{remainingTarget.length}</h2>
		</header>
	);
};

export default Header;
