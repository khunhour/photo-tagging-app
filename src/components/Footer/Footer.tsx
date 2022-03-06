import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
	return (
		<footer data-testid="footer">
			<p>khunhour &copy; 2022</p>
			<a href="https://github.com/khunhour/photo-tagging-app">
				<img src={require("../../images/github.png")} alt="github" />
			</a>
		</footer>
	);
};

export default Footer;
