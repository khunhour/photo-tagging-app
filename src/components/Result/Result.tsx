import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
type Props = {
	handleRestartGame: () => void;
};

const Result: React.FC<Props> = ({ handleRestartGame }) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<div>Time</div>
			<div className="button-container">
				<Link to="/">
					<button onClick={handleRestartGame}>Home</button>
				</Link>
				<Link to="/leaderboard">
					<button onClick={handleRestartGame}>Leaderboard</button>
				</Link>
			</div>
		</div>
	);
};

export default Result;
