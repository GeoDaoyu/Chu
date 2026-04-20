# @chu/lib

Chu 项目公共库，提供核心功能、业务逻辑和工具函数。

## 目录结构

```
src/
├── core/          # 核心功能模块
│   └── layer/     # 图层相关
├── business/      # 业务逻辑模块
│   ├── basemap.js    # 底图相关
│   ├── underground.js # 地下空间
│   ├── user.js       # 用户信息
│   └── index.js      # 业务模块入口
└── utils/         # 工具函数
    └── geojsonToArcGIS.js # GeoJSON 转 ArcGIS Graphic
```

## 模块说明

### Core (核心模块)

核心功能模块，包含底层渲染、数学计算、图层操作等基础能力。

- **layer**: 图层管理相关

### Business (业务模块)

业务逻辑模块，封装具体业务场景的功能。

- **basemap**: 底图加载与管理
- **underground**: 地下空间相关
- **user**: 用户信息管理

### Utils (工具模块)

独立的工具函数，可跨模块使用。

- **geojsonToArcGIS**: 将 GeoJSON 几何转换为 ArcGIS Graphic 对象

## 使用方式

```javascript
// 导入核心模块
import { ... } from '@chu/lib/core';

// 导入业务模块
import { ... } from '@chu/lib/business';

// 导入工具模块
import { geojsonToArcGIS } from '@chu/lib/utils/geojsonToArcGIS';
```

## 开发说明

- 核心模块 (`core/`) 应保持稳定，避免频繁变更
- 业务模块 (`business/`) 可根据需求扩展
- 工具模块 (`utils/`) 应为纯函数，无副作用
- 所有导出均通过 `src/index.js` 统一管理
