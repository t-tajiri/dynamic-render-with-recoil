type tableLayoutResolverProps = {
  layout: layout
}
export function TableLayoutResolver({ layout }: tableLayoutResolverProps) {
  return (
    <div>
      { JSON.stringify(layout) }
    </div>
  );
}