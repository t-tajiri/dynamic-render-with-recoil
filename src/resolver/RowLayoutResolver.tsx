import { useMemo } from "react";
import { ProfileRow } from "../components/profile/ProfileRow";
import { ColumnLayoutResolver } from "./ColumnLayoutResolver";

type rowLayoutResolverProps = {
  layout: rowLayout
}
export function RowLayoutResolver({ layout }: rowLayoutResolverProps) {
  const columnLayouts = useMemo(() => extractColumnLayout(layout), [layout]);

  const columns = [] as JSX.Element[];

  columnLayouts.forEach(column => {
    columns.push(<ColumnLayoutResolver layout={column} />);
  });

  return (
    <ProfileRow>
      <>
      { columns }
      </>
    </ProfileRow>
  );
}

function extractColumnLayout(layout: rowLayout) {
  const columns = [] as Array<columnLayout>;
  layout.forEach(column => {
    columns.push(column);
  });

  return columns;
}