type profileColumnProps = {
  layout: columnLayout
}

export function ProfileColumn({ layout }: profileColumnProps) {
  return (
    <>
      <div className="profile__title">{ layout.label }</div>
      <div className="profile__type">{ layout.type }</div>
    </>
  );
}