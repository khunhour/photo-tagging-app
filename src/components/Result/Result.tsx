import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
type Props = {
	handleRestartGame: (destination: string) => void;
};

const Result: React.FC<Props> = ({ handleRestartGame }) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<div>Time</div>
			<div className="button-container">
				<button onClick={() => handleRestartGame("")}>Home</button>
				<button onClick={() => handleRestartGame("leaderboard")}>
					Leaderboard
				</button>
			</div>
		</div>
	);
};

export default Result;
