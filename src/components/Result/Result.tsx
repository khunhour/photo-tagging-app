import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
type Props = {};

const Result = (props: Props) => {
	return (
		<div className="result">
			<h2>Your Score</h2>
			<div>Time</div>
			<div className="button-container">
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/leaderboard">
					<button>Leaderboard</button>
				</Link>
			</div>
		</div>
	);
};

export default Result;
