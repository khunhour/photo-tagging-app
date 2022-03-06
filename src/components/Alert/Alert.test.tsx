import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "./Alert";

test("renders the correct alert", () => {
	render(<Alert />);
	const alert = screen.getByRole("heading", { name: "Alert" });
	expect(alert).toBeInTheDocument();
});
