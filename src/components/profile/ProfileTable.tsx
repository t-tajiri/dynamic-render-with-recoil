type profileTableProps = {
  children: JSX.Element
}
export function ProfileTable({ children }: profileTableProps) {
  return (
    <div className="profile">
      { children }
    </div>
  );
}