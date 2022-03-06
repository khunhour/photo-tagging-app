import React from "react";

interface Props {
	success: boolean;
}

const Alert: React.FC<Props> = ({ success }) => {
	const color = success ? "success" : "error";
	const message = success ? "Character Found." : "Keep Looking.";
	return <div className={`color ${color}`}>{message}</div>;
};

export default Alert;
