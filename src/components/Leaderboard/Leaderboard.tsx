import React from "react";
import TableRow from "./TableRow";
import "./Leaderboard.css";
import { Link } from "react-router-dom";

type Props = {};

const Leaderboard = (props: Props) => {
	return (
		<div className="wrapper">
			<div id="leaderboard">
				<h1>Leaderboard</h1>
				<Link to="/">
					<button>{"<"} Back Home</button>
				</Link>
				<Link to="/game">
					<button>Play Again {">"}</button>
				</Link>
				<div className="ranking">
					<h2>Ranking</h2>
					<table>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th>Time</th>
						</tr>
						{/* <TableRow /> */}
						<tr>
							<td>1</td>
							<td>Mary Poppins</td>
							<td>30s</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Mary Poppins</td>
							<td>30s</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Mary Poppins</td>
							<td>30s</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Mary Poppins</td>
							<td>30s</td>
						</tr>
					</table>
				</div>
				<a
					href="https://www.flaticon.com/free-icons/find"
					title="find icons"
				>
					Find icons created by Freepik - Flaticon
				</a>
			</div>
		</div>
	);
};

export default Leaderboard;
