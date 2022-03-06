import React from "react";
import "./Alert.css";

interface Props {
	showAlert: string;
}

const Alert: React.FC<Props> = ({ showAlert }) => {
	let message;
	if (showAlert === "success") {
		message = "Character Found.";
	} else if (showAlert === "error") {
		message = "Keep Looking.";
	}
	return <div className={`alert ${showAlert}`}>{message}</div>;
};

export default Alert;
