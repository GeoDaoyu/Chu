# 多环境部署

## 背景

GIS项目除了互联网环境之后，还可能有政务网和内网环境。互联网环境中可以使用Docker、Jenkins等部署工具。政务网和内网，还出于手工拷贝部署的刀耕火种中。

## 考虑

Chu对于手工部署做了考虑。

手⼯部署时，需要修改的配置包括且不限于

- config（portal地址、系统登录地址、静态资源地址等）
- 地图服务（服务地址、渲染样式、字段等）
- 后台接⼝、第三方API地址等

## 设计

Umi提供的部署[⽅案](https://umijs.org/docs/guides/env-variables)只适⽤于打包前。

实际中，重新部署是繁琐的，⽽修改和替换配置⽂件是⽅便的。所以需要能在打包后⽂件中直接修改配置。

Chu采⽤静态配置⽂件加打包脚本来保证需求。

1. 配置⽂件均提取到 `public`目录下，以保证打包后也能修改
2. 配置⽂件按照环境区分命名，如：

```
- index.js // 互联网环境
- index.gov.js // 政务⽹环境
- index.dev.js // 测试环境
```

3. 在config中配置`headScript`

```js
import { defineConfig } from "@umijs/max";
const { BUILD_ENV } = process.env;

export default defineConfig({
  headScript: [
    {
      src: BUILD_ENV ? `./config/index.${BUILD_ENV}.js` : "./config/index.js",
    },
  ],
});
```

4. 在 `package.json`增加配置

```json
{
  "scripts": {
    "build:gov": "cross-env BUILD_ENV=gov max build"
  }
}
```

5. 打包时通过参数区分环境

```
pnpm run build:gov
```
