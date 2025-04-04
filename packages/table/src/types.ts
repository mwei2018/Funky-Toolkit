import type { GridOptions, GridReadyEvent, GetRowIdParams, IsRowSelectable } from 'ag-grid-enterprise';
import type { ReactNode } from 'react';

export interface FunkyTableProps extends Omit<GridOptions, 'rowData'> {
  data?: any[];
  loading?: boolean;
  error?: Error;
  onGridReady?: (event: GridReadyEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  getRowId?: (params: GetRowIdParams) => string;
  isRowSelectable?: IsRowSelectable;
  suppressRowClickSelection?: boolean;
  suppressCellFocus?: boolean;
  enableCellTextSelection?: boolean;
  ensureDomOrder?: boolean;
  suppressRowVirtualisation?: boolean;
}

export interface TableColumn {
  field: string;
  headerName: string;
  width?: number;
  flex?: number;
  sortable?: boolean;
  filter?: boolean;
  resizable?: boolean;
  pinned?: 'left' | 'right';
  cellRenderer?: (params: any) => ReactNode;
  cellRendererParams?: Record<string, any>;
  valueFormatter?: (params: any) => string;
  valueGetter?: (params: any) => any;
  hide?: boolean;
  suppressMovable?: boolean;
  suppressMenu?: boolean;
  suppressSizeToFit?: boolean;
  suppressAutoSize?: boolean;
  suppressUnSort?: boolean;
  suppressSort?: boolean;
  suppressFilter?: boolean;
  suppressMovableColumns?: boolean;
  suppressColumnVirtualisation?: boolean;
} 