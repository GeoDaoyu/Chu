## 架构设计

采用了Monorepo架构来设计代码仓库。

项目应用模板放到apps文件夹中，比如cim-map、uam-map、smart-mapping-map，xxx-map是通过umi max搭建的，有自己的配置、依赖和源代码。

组件库、工具库、脚手架等放到packages文件夹中。ui、widgets是通过dumi搭建的，有配置、文档、依赖和源代码。

仓库根目录有README、依赖、文档等，通过pnpm-workspace来管理公共依赖。

```plain
Chu
├─ apps
│  ├─ map-pro
│  └─ scene-pro
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

## 应用目录

子包app的目录结构，沿用umi的[目录结构](https://umijs.org/docs/guides/directory-structure)

**不使用`.umirc.ts`，而是统一使用`config/config.js`**

```plain
.
├── config
│   ├── config.js
│   └── router.js
├── dist
├── mock
│   └── app.js｜jsx
├── public
│   ├── assets // jsapi assets专用目录
│   ├── config
│   │   ├── index.js
│   │   └── index.prod.js
│   ├── css
│   ├── fonts
│   └── libs
├── src
│   ├── .umi
│   ├── .umi-production
│   ├── layoujs
│   │   ├── BasicLayout.jsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.js
│   │   └── index.js
│   ├── pages
│   │   ├── index.less
│   │   └── index.jsx
│   ├── utils // 推荐目录
│   │   └── index.js
│   ├── services // 推荐目录
│   │   └── api.js
│   ├── app.(js|jsx)
│   ├── global.js
│   ├── global.(css|less|sass|scss)
│   ├── overrides.(css|less|sass|scss)
│   ├── favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)
│   └── loading.jsx
├── node_modules
│   └── .cache
│       ├── bundler-webpack
│       ├── mfsu
│       └── mfsu-deps
├── .env
├── plugin.js
├── package.json
└── jsconfig.json
```

## 组件目录

对组件的目录也做了约定，图片统一放`images`，配置统一放`config.js`等：

```plain
.
├── components
│   └── MyComponent
│   		├── index.(js|jsx)
│   		└── index.less
├── images
├── viewModel.js
├── useHooks.js
├── config.js
├── index.(js|jsx)
└── index.less
```
