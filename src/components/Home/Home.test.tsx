import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "./Home";

it("renders home div", () => {
	render(
		<BrowserRouter>
			<Home
				currentPlayer=""
				handleGameStart={() => {}}
				handleNameChange={() => {}}
			/>
		</BrowserRouter>
	);
	const home = screen.getByTestId("home-component");
	expect(home).toBeInTheDocument();
});
