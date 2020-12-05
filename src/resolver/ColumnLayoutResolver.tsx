type columnLayoutResolverProps = {
  layout: columnLayout
}

export function ColumnLayoutResolver({ layout }: columnLayoutResolverProps) {
  return (
    <div>{ JSON.stringify(layout) }</div>
  );
}