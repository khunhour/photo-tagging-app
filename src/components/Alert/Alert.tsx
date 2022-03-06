import React from "react";
import "./Alert.css";

interface Props {
	success: boolean;
}

const Alert: React.FC<Props> = ({ success }) => {
	const color = success ? "success" : "error";
	const message = success ? "Character Found." : "Keep Looking.";
	return <div className={`alert ${color}`}>{message}</div>;
};

export default Alert;
