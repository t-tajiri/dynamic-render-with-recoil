interface Window {
  layout: layout
}

type layout = {
  title: string,
  tables: tableGrid,
  tableTypes: tableTypes
}

type tableGrid = {
  grid1: table,
  grid2: table
}

type tableTypes = {
  grid1: tableType,
  grid2: tableType
}

type tableType = "profile" | "fixed"

type table = {
  table: Array<row>
}

type row = Array<column>

type column = {
    label: string,
    value: string
}
