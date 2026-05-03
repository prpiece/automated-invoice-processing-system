import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the project title", () => {
    render(<Home />);
    const heading = screen.getByText(/Automated Invoice Processing System/i);
    expect(heading).toBeInTheDocument();
  });
});
