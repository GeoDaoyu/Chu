🎉 欢迎向 Chu 贡献代码! 🎉

# 代码贡献规范

## 1.下载源码

```bash
git clone https://github.com/GeoDaoyu/Chu.git  --depth=1
```

## 2.前置依赖安装

### 2.1.安装 pnpm

由于使用了 pnpm workspace，首先需要安装 [pnpm](https://pnpm.io/installation)

### 2.2.安装项目依赖

```bash
pnpm install
```

## 3.运行项目

```bash
# 运行应用
pnpm start:cim
```

## 4.代码风格

@antfu/eslint-config，可以执行lint指令检查

```shell
pnpm run lint
```

## 5.提交代码

### 5.1.Commit 提交规范

根据 [angular 规范](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format) 提交 commit，这样 history 看起来更加清晰。

提交 commit 的类型，包括以下几种

- feat: 新功能
- fix: 修复问题
- docs: 修改文档
- style: 修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- perf: 提升性能
- test: 增加修改测试用例
- chore: 修改工具相关（包括但不限于文档、代码生成等）
- deps: 升级依赖

尽量用一句话清楚的描述这次提交做了什么，查看具体参考[文档](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)。

### 5.2.提交 Pull Request

如果你有仓库的开发者权限，而且希望贡献代码，那么你可以创建分支修改代码提交 PR，[@GeoDaoyu](https://github.com/GeoDaoyu) 会 review 代码合并到主干。

```bash
# 先创建开发分支开发，分支名应该有含义，避免使用 update、tmp 之类的
$ git checkout -b branch-name

# 提交代码，message 见下面的规范

$ git add . # git add -u 删除文件
$ git commit -m "fix: widget must xxx"
$ git push origin branch-name
```

提交后就可以在 [Chu](https://github.com/GeoDaoyu/Chu/pulls) 创建 Pull Request 了。
