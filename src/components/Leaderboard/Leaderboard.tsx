import React from "react";
import TableRow from "./TableRow";
import "./Leaderboard.css";
import { Link } from "react-router-dom";
import { LeaderboardType } from "../../type/LeaderboardType";
import { formatSeconds } from "../../utilities/formatSeconds";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
type Props = {
	leaderboard: LeaderboardType | undefined;
	handleGameStart: (e: any) => void;
};

const Leaderboard: React.FC<Props> = ({ handleGameStart, leaderboard }) => {
	return (
		<div className="wrapper">
			<div id="leaderboard">
				<h1>Leaderboard</h1>
				<div className="button-container">
					<Link to="/">
						<Button
							variant="contained"
							startIcon={<ArrowBackIosIcon />}
						>
							{" "}
							Back Home
						</Button>
					</Link>
					<Button
						variant="contained"
						endIcon={<ArrowForwardIosIcon />}
						onClick={handleGameStart}
					>
						Play Again
					</Button>
				</div>
				<div className="ranking">
					<h2>Ranking</h2>
					<table>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th>Time</th>
						</tr>
						{leaderboard?.map((user, index) => (
							<TableRow
								rank={index + 1}
								name={user.name}
								time={formatSeconds(user.time)}
							/>
						))}
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
