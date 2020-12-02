import { useGetGlobalEmbeddedLayout } from "../states/EmbeddedLayoutState";

export function LayoutResolver() {
  const embeddedLayout = useGetGlobalEmbeddedLayout();
  return (
    <div>
        { JSON.stringify(embeddedLayout.read()) }
    </div>
  );
}