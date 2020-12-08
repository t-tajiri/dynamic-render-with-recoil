import { render, screen } from "@testing-library/react";
import { ProfileTableCompound } from "../../components/profile/ProfileTableCompound";

describe("ProfileTableCompound", () => {
  test("render children if tableType is true", () => {
    const tableType = "profile";
    const children = <div>it works!</div>;

    render(
      <ProfileTableCompound tableType={tableType}>
        {children}
      </ProfileTableCompound>
    );

    expect(screen.getByText("it works!")).toBeInTheDocument();
  });

  test("render nothing if tableType is false", () => {
    const tableType = "FALSE";
    const children = <div>it works!</div>;


    render(
      <ProfileTableCompound tableType={tableType}>
        {children}
      </ProfileTableCompound>
    );

    expect(screen.queryByText("it works!")).not.toBeInTheDocument();
  });
});