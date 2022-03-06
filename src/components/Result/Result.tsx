import React from "react";
import { formatSeconds } from "../../utilities/formatSeconds";
import "./Result.css";
type Props = {
	handleGameOver: (destination: string) => void;
	score: number;
};

const Result: React.FC<Props> = ({ handleGameOver, score }) => {
	return (
		<div className="result" data-testid="result-component">
			<h2>Your Score</h2>
			<div>You finished in</div>
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
