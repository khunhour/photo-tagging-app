import React from "react";

interface Props {
	rank: number;
	name: string;
	time: number;
}

const TableRow: React.FC<Props> = ({ rank, name, time }) => {
	return (
		<tr>
			<td>{rank}</td>
			<td>{name}</td>
			<td>{time}</td>
		</tr>
	);
};

export default TableRow;
