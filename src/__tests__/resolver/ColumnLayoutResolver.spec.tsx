import { render, screen } from "@testing-library/react";
import { ColumnLayoutResolver } from "../../resolver/ColumnLayoutResolver";

describe("ColumnLayoutResolver", () => {
  test("render ProfileColun correctly", () => {
    const layout = { label: "testLabel", type: "nyan cat"};

    render(<ColumnLayoutResolver layout={layout} />);

    expect(screen.getByText("testLabel")).toBeInTheDocument();
    expect(screen.getByText("nyan cat")).toBeInTheDocument();
  });
});
