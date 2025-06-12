# 编码规范

本来想继续沿用umi的[lint规则](https://umijs.org/docs/guides/lint)，即[umi/lint](https://github.com/umijs/umi/tree/master/packages/lint)。

但是umi/lint 不支持eslint9，也[没工夫升级](https://github.com/umijs/umi/issues/12261)。

所以使用了另一个支持eslint9的热门开源配置：[@antfu/eslint-config](https://github.com/antfu/eslint-config)。

并没有添加太多的配置，主要是忽略掉ArcGIS JS 的静态文件和Umi的运行文件，详见[eslint.config.js](https://github.com/GeoDaoyu/Chu/blob/main/eslint.config.js)。
