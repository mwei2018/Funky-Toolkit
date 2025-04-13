import type { GridOptions } from 'ag-grid-community';

export const defaultTheme: GridOptions = {
  headerHeight: 40,
  rowHeight: 40,
  animateRows: true,
  enableCellTextSelection: true,
  suppressCellFocus: true,
  suppressRowClickSelection: true,
  rowSelection: 'multiple',
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 20, 50, 100],
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
    suppressMovable: false,
    menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
  },
  autoSizeStrategy: {
    type: 'fitGridWidth',
    defaultMinWidth: 100,
  },
}; 