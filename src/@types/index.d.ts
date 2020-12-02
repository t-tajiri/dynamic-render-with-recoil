type column = {
    title: string,
    input: string
}

type row = Array<column>

type table = Array<row>;

interface Window {
  initData: {
    title: string,
    table: table
  }
}