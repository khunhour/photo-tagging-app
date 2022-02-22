import React from "react";
import "./Footer.css";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer>
			<p>khunhour &copy;</p>
			<a href="https://github.com/khunhour/photo-tagging-app">
				<img src={require("../../images/github.png")} />
			</a>
		</footer>
	);
};

export default Footer;
