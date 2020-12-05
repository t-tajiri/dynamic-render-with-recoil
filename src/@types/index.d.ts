interface Window {
  layout: layout
}

type layout = {
  title: string,
  tables: tableGridLayout,
  tableTypes: tableTypes
}

type tableGridLayout = {
  grid1: tableLayout,
  grid2: tableLayout
}

type tableTypes = {
  grid1: tableType,
  grid2: tableType
}

type tableType = "profile" | "fixed"

type tableLayout = {
  table: Array<rowLayout>
}

type rowLayout = Array<columnLayout>

type columnLayout = {
    label: string,
    value: string
}
