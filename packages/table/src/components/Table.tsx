import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllEnterpriseModule } from 'ag-grid-enterprise';
import type { FunkyTableProps } from '../types';
import { defaultTheme } from '../theme';
import './styles.css';

// 注册所有企业版模块
ModuleRegistry.registerModules([AllEnterpriseModule]);

export const Table: React.FC<FunkyTableProps> = ({
  data = [],
  loading = false,
  error,
  onGridReady,
  className,
  style,
  ...gridOptions
}) => {
  const [gridApi, setGridApi] = useState<any>(null);

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
    <div className={`funky-table ${className || ''}`} style={style}>
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
        autoSizeStrategy={{
          type: 'fitGridWidth',
          defaultMinWidth: 100,
        }}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          suppressMovable: false,
          suppressMenu: false,
          suppressSizeToFit: false,
          suppressAutoSize: false,
          suppressUnSort: false,
          suppressSort: false,
          suppressFilter: false,
        }}
      />
    </div>
  );
};

export * from '../types'; 