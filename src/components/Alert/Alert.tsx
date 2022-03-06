import React from "react";

const Alert: React.FC<boolean> = (success) => {
	const color = success ? "success" : "error";
	const message = success ? "Character Found." : "Keep Looking.";
	return <div className={`color ${color}`}>{message}</div>;
};

export default Alert;
