## 架构设计

采用了Monorepo架构来设计代码仓库。

项目应用模板放到apps文件夹中，比如cim-map、uam-map、smart-mapping-map，xxx-map是通过umi max搭建的，有自己的配置、依赖和源代码。

组件库、工具库、脚手架等放到packages文件夹中。ui、widgets是通过dumi搭建的，有配置、文档、依赖和源代码。

仓库根目录有README、依赖、文档等，通过pnpm-workspace来管理公共依赖。

```plain
Chu
├─ apps
│  ├─ cim-map
│  ├─ uam-map
│  └─ smart-mapping-map
│     ├─ .umirc.ts
│     ├─ package.json
│     └─ src
├─ packages
│  ├─ cli
│  ├─ widgets
│  ├─ lib
│  └─ ui
│     ├─ .dumirc.ts
│     ├─ docs
│     ├─ package.json
│     └─ src
├─ docs
├─ README.md
├─ package.json
└─ pnpm-workspace.yaml
```
