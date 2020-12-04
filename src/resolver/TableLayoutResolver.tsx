import { useMemo } from "react";
import { ProfileTable } from "../components/profile/ProfileTable";
import { RowLayoutResolver } from "./RowLayoutResolver";

type tableLayoutResolverProps = {
  layout: table
  tableType: string
}

export function TableLayoutResolver({ layout, tableType }: Required<tableLayoutResolverProps>) {
  const rowLayout = useMemo(() => extractTableLayout(layout), [layout]);

  const rows = [] as JSX.Element[];

  rowLayout.forEach(row => {
    rows.push(<RowLayoutResolver layout={row}/>);
  })

  return (
    <div>
    {tableType === "profile" &&
      <ProfileTable>
        <>
          {rows}
        </>
      </ProfileTable>
    }
    </div>
  );
}

function extractTableLayout(layout: table) {
  const rows = [] as Array<row>;
  layout.table.forEach(row => {
    rows.push(row)
  });

  return rows;
}