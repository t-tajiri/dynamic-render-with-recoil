type rowLayoutResolverProps = {
  layout: row
}
export function RowLayoutResolver({ layout }: rowLayoutResolverProps) {
  //TODO
  return (
    <div>{ JSON.stringify(layout) }</div>
  );
}