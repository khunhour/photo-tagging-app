import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropDown from "./DropDown";

it("renders drop-down-menu and the red marker", () => {
	render(
		<DropDown
			mouseCoord={{ x: 0, y: 0 }}
			remainingTarget={[{ name: "name", img: "benson.png" }]}
			handleCharSelection={() => {}}
		/>
	);
	const dropdown = screen.getByTestId("drop-down");
	const marker = screen.getByTestId("marker");
	expect(dropdown).toBeInTheDocument();
	expect(marker).toBeInTheDocument();
});
