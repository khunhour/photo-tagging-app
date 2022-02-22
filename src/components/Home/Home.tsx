import React from "react";
import "./Home.css";
type Props = {};

const Home = (props: Props) => {
	return (
		<div id="home">
			<h2>Seek&Find</h2>
			<div className="objective">
				<h3>Objective</h3>
				<div>Find all 3 characters as fast as possible!</div>
			</div>
			<div className="how-to-play">
				<h3>How to Play</h3>
				<ol>
					<li>Enter your name and click "Play".</li>
					<li>The timer will start as soon as the image loads.</li>
					<li>Select the location on the image.</li>
					<li>Choose the character you think you have found.</li>
					<li>The game will end when all 3 characters are found.</li>
					<li>See your scores on the Leaderboard.</li>
				</ol>
			</div>
			<form>
				<h3>Enter Your Name</h3>
				<input placeholder="Peter Parker" />
				<button type="submit">Play</button>
			</form>
		</div>
	);
};

export default Home;
