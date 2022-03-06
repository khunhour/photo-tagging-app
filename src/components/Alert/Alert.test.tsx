import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

it("renders the sucess alert", () => {
	render(<Alert showAlert="success" />);
	const alert = screen.getByText(/Character Found./i);
	expect(alert.textContent).toMatch("Character Found.");
});

it("renders the error alert", () => {
	render(<Alert showAlert="error" />);
	const alert = screen.getByText(/Keep Looking/i);
	expect(alert.textContent).toMatch("Keep Looking.");
});
