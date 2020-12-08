import { ProfileTable } from "./ProfileTable";

type profileTableCompoundProps = {
  tableType: string, 
  children: JSX.Element
}

export function ProfileTableCompound({ tableType, children }: profileTableCompoundProps) {
  return (
    tableType === "profile"
    ? <ProfileTable>
        { children }
      </ProfileTable>
    : null
  );
}