type profileRowProps = {
  children: JSX.Element
}

export function ProfileRow({ children }: profileRowProps) {
  return (
    <div className="profile__row">
      { children }
    </div>
  );
}