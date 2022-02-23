import React from "react";
import "./Result.css";
type Props = {};

const Result = (props: Props) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<div>Time</div>
			<div className="button-container">
				<button>Home</button>
				<button>Leaderboard</button>
			</div>
		</div>
	);
};

export default Result;
