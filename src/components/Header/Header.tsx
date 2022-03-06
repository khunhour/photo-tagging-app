import React from "react";
import { Link } from "react-router-dom";
import { formatSeconds } from "../../utilities/formatSeconds";
//css
import "./Header.css";

//type
interface Props {
	remainingTarget: { name: string; img: string }[];
	count: number;
	gameStart: boolean;
	gameOver: boolean;
	handleGameOver: (destination: string) => void;
}

const Header: React.FC<Props> = ({
	remainingTarget,
	count,
	gameStart,
	gameOver,
	handleGameOver,
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
					<button onClick={() => handleGameOver("")}>Home</button>
					<h1 className="timer">{formatSeconds(count)}</h1>
					<div>
						{remainingTarget.map((target, index) => {
							return (
								<img
									height="40"
									src={require("/src/images/" + target.img)}
									alt={target.name}
								/>
							);
						})}
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
