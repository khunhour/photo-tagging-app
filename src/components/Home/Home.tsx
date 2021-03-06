import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

type Props = {
	currentPlayer: string;
	handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleGameStart: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Home: React.FC<Props> = ({
	currentPlayer,
	handleNameChange,
	handleGameStart,
}) => {
	return (
		<div id="home" data-testid="home-component">
			<h1>Seek&Find</h1>
			<div className="objective">
				<h2>Objective</h2>
				<p>Find all 3 cartoon characters as fast as possible!</p>
			</div>
			<div className="how-to-play">
				<h2>How to Play</h2>
				<ol>
					<li>Enter your name and click "Play".</li>
					<li>The timer will start as soon as the image loads.</li>
					<li>Click a location on the image.</li>
					<li>Choose the character you think you have found.</li>
					<li>The game will end when all 3 characters are found.</li>
					<li>See your scores on the Leaderboard.</li>
				</ol>
			</div>
			<form onSubmit={handleGameStart}>
				<h2>Enter Your Name</h2>
				<input
					placeholder="Peter Parker"
					required
					onChange={handleNameChange}
					value={currentPlayer}
				/>
				<button type="submit">Play</button>
			</form>
			<Link to="/leaderboard">
				<button>Leaderboard</button>
			</Link>
		</div>
	);
};

export default Home;
