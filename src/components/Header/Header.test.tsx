import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
	it("render logo when gameStart and gameOver is false", () => {
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
});
