import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
import type { ColDef, GridApi } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import type { FunkyTableProps } from '../types';
import { defaultTheme } from '../theme';
import '../index.css';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export const Table: React.FC<FunkyTableProps> = ({
  data = [],
  loading = false,
  error,
  onGridReady,
  className,
  style,
  ...gridOptions
}) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  useEffect(() => {
    if (gridApi) {
      if (loading) {
        gridApi.showLoadingOverlay();
      } else if (error) {
        gridApi.showNoRowsOverlay();
      } else {
        gridApi.hideOverlay();
      }
    }
  }, [loading, error, gridApi]);

  const handleGridReady = (event: any) => {
    setGridApi(event.api);
    onGridReady?.(event);
  };

  return (
    <div 
      className={`ag-theme-alpine ${className || ''}`} 
      style={{ 
        height: '100%', 
        width: '100%',
        ...style 
      }}
    >
      <AgGridReact
        {...defaultTheme}
        {...gridOptions}
        rowData={data}
        onGridReady={handleGridReady}
        overlayLoadingTemplate={
          '<div class="ag-overlay-loading-center"><div class="ag-spinner"></div><div>加载中...</div></div>'
        }
        overlayNoRowsTemplate={
          '<div class="ag-overlay-no-rows-center"><div class="ag-icon-no-rows"></div><div>暂无数据</div></div>'
        }
        rowModelType="clientSide"
        suppressRowClickSelection={true}
        suppressCellFocus={true}
        enableCellTextSelection={true}
        ensureDomOrder={true}
        maxConcurrentDatasourceRequests={2}
        defaultColDef={defaultTheme.defaultColDef}
      />
    </div>
  );
};

export * from '../types'; 