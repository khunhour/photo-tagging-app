import { render, screen } from "@testing-library/react";
import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import Header from "./Header";

describe("Header", () => {
	it("render logo when gameStart is false", () => {
		const logo = screen.getByRole("heading", { name: "Seek&Find" });
		// render(<Header />);
		// expect(button).toBeInTheDocument();
	});
});
