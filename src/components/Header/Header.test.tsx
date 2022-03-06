import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
	it("renders logo when gameStart and gameOver is false", () => {
		render(
			<Header
				gameOver={false}
				gameStart={false}
				count={0}
				remainingTarget={[]}
			/>
		);
		const logo = screen.getByRole("heading", { name: "Seek&Find" });
		expect(logo).toBeInTheDocument();
	});

	it("renders timer when gameStart or gameOver is true", () => {
		render(
			<Header
				gameOver={true}
				gameStart={true}
				count={0}
				remainingTarget={[]}
			/>
		);
		const timer = screen.getByRole("heading");
		expect(timer).toHaveClass("timer");
	});
});
