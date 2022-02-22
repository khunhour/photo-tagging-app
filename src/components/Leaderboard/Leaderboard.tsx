import React from "react";
import "./Leaderboard.css";

type Props = {};

const Leaderboard = (props: Props) => {
	return (
		<div id="leaderboard">
			<h2>Leaderboard</h2>
			<div className="ranking">
				<h3>Ranking</h3>
				<table>
					<tr>
						<th>Rank</th>
						<th>Name</th>
						<th>Time</th>
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
	);
};

export default Leaderboard;
