import { useEffect, useState } from "react";
import { TableLayoutResolver } from "../resolver/TableLayoutResolver";

export function App() {
  const [layout, setLayout]   = useState({} as Window["layout"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLayout(window.layout);
    setLoading(true);
  }, []);

  return (
    <main className="container mx-auto px-4">
      {loading &&
      <>
        <TableLayoutResolver layout={layout.tables.grid1} tableType={layout.tableTypes.grid1} />
        <TableLayoutResolver layout={layout.tables.grid2} tableType={layout.tableTypes.grid2} />
      </>
      }
    </main>
  );
}
