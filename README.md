# Funky UI Toolkit

A modern React component library built with TypeScript and pnpm workspaces.

## Packages

- `@funky/ui`: Core React components
- `@funky/table`: Advanced table component based on ag-grid
- `@funky/icons`: Icon library
- `@funky/utils`: Utility functions
- `@funky/testing`: Testing utilities
- `@funky/config`: Shared configurations
- `@funky/docs`: Documentation site

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 8

### Installation

```bash
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

### Documentation

```bash
# Start documentation site
pnpm docs:dev

# Build documentation
pnpm docs:build
```

## Contributing

1. Create a new branch
2. Make your changes
3. Run tests and linting
4. Create a changeset
5. Submit a pull request

## License

MIT

## 项目结构

```
.
├── packages/
│   ├── ui/          # React 组件库
│   ├── icons/       # 图标库
│   ├── utils/       # 公共函数库
│   ├── testing/     # 测试工具库
│   └── config/      # 代码格式化配置库
├── docs/            # 文档站点
├── package.json     # 根目录配置
└── pnpm-workspace.yaml  # 工作空间配置
```

## 技术栈

- React 18+
- TypeScript
- Rsbuild
- Ladle (组件文档)
- Vitest (单元测试)
- ESLint + Prettier (代码规范)

## 使用示例

```typescript
// 使用 UI 组件
import { Button } from '@funky/ui';

// 使用图标
import { Icon } from '@funky/icons';

// 使用工具函数
import { formatDate } from '@funky/utils';

// 使用测试工具
import { render } from '@funky/testing';
```

## 开发指南

1. 所有包都使用 TypeScript 开发
2. 组件库使用 Ladle 进行文档开发
3. 所有包都需要编写单元测试
4. 遵循项目配置的代码规范

## 发布

使用 pnpm 发布包：

```bash
pnpm publish
```

## 许可证

MIT 



--------
pnpm add -D @types/react @types/react-dom --filter @funky/table
pnpm --filter @funky/table lint  # 只检查 table 库