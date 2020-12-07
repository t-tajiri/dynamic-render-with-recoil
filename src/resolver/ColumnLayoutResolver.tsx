import { ProfileColumn } from "../components/profile/ProfileColumn";

type columnLayoutResolverProps = {
  layout: columnLayout
}

export function ColumnLayoutResolver({ layout }: columnLayoutResolverProps) {
  return (
    <ProfileColumn layout={layout} />
  );
}