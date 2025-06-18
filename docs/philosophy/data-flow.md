# 数据流

Chu中状态管理库使用[Zustand](https://github.com/pmndrs/zustand)。

## 不再使用dva

https://github.com/umijs/umi/discussions/12387

## Zustand使用文档

https://zustand.docs.pmnd.rs/getting-started/introduction

## Umi `initial-state` & `useModel`

在项目中并没有禁用Umi的[useModel](https://umijs.org/docs/max/data-flow)。依旧可以使用。

## Store

Monorepo下，Store创建在`packages/store`。Store只管理状态，不管理业务。业务逻辑写到组件内或中间件中。
