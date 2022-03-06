import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./Result";

it("renders result div", () => {
	render(<Result score={0} handleGameOver={() => {}} />);
	const result = screen.getByTestId("result-component");
	expect(result).toBeInTheDocument();
});
