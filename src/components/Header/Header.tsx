import React from "react";
import { formatSeconds } from "../../utilities/formatSeconds";
//css
import "./Header.css";

//type
interface Props {
	remainingTarget: { name: string; img: string }[];
	count: number;
	gameStart: boolean;
	gameOver: boolean;
}

const Header: React.FC<Props> = ({
	remainingTarget,
	count,
	gameStart,
	gameOver,
}) => {
	return (
		<header>
			{!gameStart && !gameOver && (
				<div className="logo">
					<img
						src={require("../../images/searching.png")}
						alt="logo"
					/>
					<h1>Seek&Find</h1>
				</div>
			)}
			{(gameStart || gameOver) && (
				<>
					<h1 className="timer">{formatSeconds(count)}</h1>
					<h1 className="target">{remainingTarget.length}</h1>
				</>
			)}
		</header>
	);
};

export default Header;
