import React from 'react';
import { Table } from '../components/Table';
import type { TableColumn } from '../types';

const columns: TableColumn[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    pinned: 'left',
  },
  {
    field: 'name',
    headerName: '名称',
    flex: 1,
  },
  {
    field: 'age',
    headerName: '年龄',
    width: 100,
  },
  {
    field: 'email',
    headerName: '邮箱',
    flex: 1,
  },
  {
    field: 'status',
    headerName: '状态',
    width: 120,
    cellRenderer: (params) => (
      <span style={{ color: params.value === 'active' ? 'green' : 'red' }}>
        {params.value}
      </span>
    ),
  },
];

const data = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com', status: 'active' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com', status: 'inactive' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com', status: 'active' },
];

export const Default = () => (
  <div style={{ height: 400 }}>
    <Table
      columnDefs={columns}
      data={data}
      pagination={true}
      paginationPageSize={10}
    />
  </div>
);

export const Loading = () => (
  <div style={{ height: 400 }}>
    <Table
      columnDefs={columns}
      data={[]}
      loading={true}
    />
  </div>
);

export const Error = () => (
  <div style={{ height: 400 }}>
    <Table
      columnDefs={columns}
      data={[]}
      error={new Error('加载失败')}
    />
  </div>
); 