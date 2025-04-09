import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components/Table';
import type { ColDef } from 'ag-grid-community';
import '../index.css';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '500px', width: '800px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例数据
const sampleData = [
  { id: 1, name: 'John', age: 30, country: 'USA' },
  { id: 2, name: 'Jane', age: 25, country: 'Canada' },
  { id: 3, name: 'Bob', age: 40, country: 'UK' },
  { id: 4, name: 'Alice', age: 35, country: 'Australia' },
];

// 列定义
const columnDefs: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'country', headerName: 'Country', width: 150 },
];

// 基本表格
export const Basic: Story = {
  args: {
    data: sampleData,
    columnDefs,
  },
};

// 带加载状态的表格
export const Loading: Story = {
  args: {
    data: sampleData,
    columnDefs,
    loading: true,
  },
};

// 带错误状态的表格
export const WithError: Story = {
  args: {
    data: sampleData,
    columnDefs,
    error: { message: 'Failed to load data' } as Error,
  },
};

// 空数据表格
export const Empty: Story = {
  args: {
    data: [],
    columnDefs,
  },
};

// 自定义样式的表格
export const CustomStyle: Story = {
  args: {
    data: sampleData,
    columnDefs,
    style: { height: '400px', width: '600px' },
    className: 'ag-theme-alpine',
  },
}; 