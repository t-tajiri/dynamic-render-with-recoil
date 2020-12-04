import { useEffect, useState } from "react";
import { TableLayoutResolver } from "src/resolver/TableLayoutResolver";
import "./App.css";

export function App() {
  const [layout, setLayout] = useState({} as Window["layout"]);
  useEffect(() => {
    setLayout(window.layout);
  }, []);
  return (
    <main>
      <TableLayoutResolver layout={layout} />
    </main>
  );
}
