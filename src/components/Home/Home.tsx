import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
type Props = {
	handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleGameStart: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Home: React.FC<Props> = ({ handleNameChange, handleGameStart }) => {
	return (
		<div className="wrapper">
			<div id="home">
				<h1>Seek&Find</h1>
				<div className="objective">
					<h2>Objective</h2>
					<div>
						Find all 3 cartoon characters as fast as possible!
					</div>
				</div>
				<div className="how-to-play">
					<h2>How to Play</h2>
					<ol>
						<li>Enter your name and click "Play".</li>
						<li>
							The timer will start as soon as the image loads.
						</li>
						<li>Click a location on the image.</li>
						<li>Choose the character you think you have found.</li>
						<li>
							The game will end when all 3 characters are found.
						</li>
						<li>See your scores on the Leaderboard.</li>
					</ol>
				</div>
				<form onSubmit={handleGameStart}>
					<h2>Enter Your Name</h2>
					<input
						placeholder="Peter Parker"
						required
						onChange={handleNameChange}
					/>
					<button type="submit">
						<Link to="/game">Play</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
