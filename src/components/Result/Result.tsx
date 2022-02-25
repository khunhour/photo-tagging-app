import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
type Props = {
	handleGameOver: (destination: string) => void;
};

const Result: React.FC<Props> = ({ handleGameOver }) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<div>Time</div>
			<div className="button-container">
				<button onClick={() => handleGameOver("")}>Home</button>
				<button onClick={() => handleGameOver("leaderboard")}>
					Leaderboard
				</button>
			</div>
		</div>
	);
};

export default Result;
