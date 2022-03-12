import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

it("renders main component", () => {
	render(
		<Main
			showMarker={false}
			mouseCoord={{ x: 0, y: 0 }}
			remainingTarget={[{ name: "name", img: "img" }]}
			showAlert={""}
			handleClickedPic={() => {}}
			handleCharSelection={() => {}}
		/>
	);
	const main = screen.getByTestId("main");
	expect(main).toBeInTheDocument();
});

it("renders dropdown when show marker is true", () => {
	render(
		<Main
			showMarker={true}
			mouseCoord={{ x: 0, y: 0 }}
			//need to explicit an actual image
			remainingTarget={[{ name: "benson", img: "benson.png" }]}
			showAlert={""}
			handleClickedPic={() => {}}
			handleCharSelection={() => {}}
		/>
	);
	const dropdown = screen.getByTestId("drop-down");
	const marker = screen.getByTestId("marker");
	expect(dropdown).toBeInTheDocument();
	expect(marker).toBeInTheDocument();
});
