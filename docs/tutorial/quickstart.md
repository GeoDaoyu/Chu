## 环境准备

首先得有 node，并确保 node 版本是 20 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows)）

mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

$ nvm -v

0.39.1
```

安装 node。

```undefined
$ nvm install 20

$ nvm use 20

$ node -v

v20.18.0
```

然后需要包管理工具。因为使用了pnpm workspace，所以必须使用[pnpm](https://pnpm.io/installation)。

## 创建项目

通过脚手架工具创建项目

```bash
$ pnpm dlx @geodaoyu/chu-cli@latest create

✔ Enter project name: chengdu-map

✔ Select project template: cim-map

```

## 启动项目

安装依赖`pnpm install`

执行 `pnpm start:cim` 命令

```bash
$ pnpm start:cim
```

在浏览器中打开 http://localhost:8000/ ，能看到地图页面。

## 部署发布

执行 `pnpm run build` 命令，

```bash
> umi build
```

产物默认会生成到 `apps/xxx/dist` 目录下，

```undefined
./dist

├── index.html

├── umi.css

└── umi.js
```

完成构建后，就可以把 dist 目录部署到服务器上了。
