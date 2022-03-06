import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

it("renders result div", () => {
	render(<Footer />);
	const footer = screen.getByTestId("footer");
	expect(footer).toBeInTheDocument();
});
