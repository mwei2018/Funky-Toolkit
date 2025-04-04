import { GridOptions } from 'ag-grid-community';

export const defaultTheme: Partial<GridOptions> = {
  theme: 'ag-theme-alpine',
  rowHeight: 40,
  headerHeight: 40,
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
  },
  pagination: true,
  paginationPageSize: 10,
  suppressRowClickSelection: true,
  rowSelection: 'single',
  animateRows: true,
  suppressLoadingOverlay: false,
  suppressNoRowsOverlay: false,
}; 