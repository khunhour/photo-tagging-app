import React from "react";
import "./Home.css";
type Props = {};

const Home = (props: Props) => {
	return (
		<div id="home">
			<h1>Seek&Find</h1>
			<div className="objective">
				<h2>Objective</h2>
				<div>Find all 3 cartoon characters as fast as possible!</div>
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
			<form>
				<h2>Enter Your Name</h2>
				<input placeholder="Peter Parker" />
				<button type="submit">Play</button>
			</form>
		</div>
	);
};

export default Home;
