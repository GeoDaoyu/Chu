<p style="background-color: #f2dede; padding: 10px; border-left: 6px solid #a94442; color: #a94442;">
文档完善中，暂不可用！！！
</p>

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

然后需要包管理工具。node 默认包含 npm，强烈建议选择[pnpm](https://pnpm.io/installation)。

## 创建项目

通过脚手架工具创建项目

```bash
$ pnpm dlx create-umi@latest

✔ Install the following package: create-umi? (Y/n) · true

✔ Pick Npm Client › pnpm

✔ Pick Npm Registry › taobao


```

## 启动项目

执行 `pnpm start:cim` 命令

行 `pnpm dev` 命令，

```bash
$ pnpm dev

        ╔═════════════════════════════════════════════════════╗

        ║ App listening at:                                   ║

        ║  >   Local: https://127.0.0.1:8000                  ║

ready - ║  > Network: https://192.168.1.1:8000                ║

        ║                                                     ║

        ║ Now you can open browser with the above addresses👆 ║

        ╚═════════════════════════════════════════════════════╝

event - compiled successfully in 1121 ms (388 modules)

event - MFSU compiled successfully in 1308 ms (875 modules)
```

在浏览器里打开 http://localhost:8000/，能看到以下界面，

```bash
占位图片
```

## 部署发布

执行 `pnpm build` 命令，

```bash
> umi build

event - compiled successfully in 1179 ms (567 modules)

event - build index.html
```

产物默认会生成到 `./dist` 目录下，

```undefined
./dist

├── index.html

├── umi.css

└── umi.js
```

完成构建后，就可以把 dist 目录部署到服务器上了。
