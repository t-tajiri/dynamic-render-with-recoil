import React, { Suspense } from "react";
const Input = React.lazy(() => import("./Input").then(module => ({ default: module.Input })));

export default function Content() {

  return (
    <main>
      <Suspense fallback={<div>loading ... </div>}>
        <Input />
      </Suspense>
    </main>
  );
}