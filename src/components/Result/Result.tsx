import React from "react";
import { formatSeconds } from "../../utilities/formatSeconds";
import "./Result.css";
type Props = {
	handleGameOver: (destination: string) => void;
	score: number;
};

const Result: React.FC<Props> = ({ handleGameOver, score }) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<h3>You finished in</h3>
			<h1>{formatSeconds(score)}</h1>
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
