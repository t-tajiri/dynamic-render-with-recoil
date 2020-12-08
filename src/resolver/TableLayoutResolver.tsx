import { useMemo } from "react";
import { ProfileTableCompound } from "../components/profile/ProfileTableCompound";
import { RowLayoutResolver } from "./RowLayoutResolver";

type tableLayoutResolverProps = {
  layout: tableLayout
  tableType: string
}

export function TableLayoutResolver({ layout, tableType }: Required<tableLayoutResolverProps>) {
  const rowLayouts = useMemo(() => extractRowLayout(layout), [layout]);

  const rows = [] as JSX.Element[];

  rowLayouts.forEach((rowLayout, rowNo) => {
    rows.push(<RowLayoutResolver layout={rowLayout} key={rowNo} />);
  });

  return (
    <ProfileTableCompound tableType={tableType}>
      <>
      { rows }
      </>
    </ProfileTableCompound>
  );
}

function extractRowLayout(layout: tableLayout) {
  const rows = [] as Array<rowLayout>;
  layout.table.forEach(row => {
    rows.push(row);
  });

  return rows;
}