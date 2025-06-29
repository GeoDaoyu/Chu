# 编码规范

本来想继续沿用umi的[lint规则](https://umijs.org/docs/guides/lint)，即[umi/lint](https://github.com/umijs/umi/tree/master/packages/lint)。

但是umi/lint 不支持eslint9，也[没工夫升级](https://github.com/umijs/umi/issues/12261)。

中途使用过其他支持eslint9的热门开源配置：[xo](https://github.com/xojs/xo)和[@antfu/eslint-config](https://github.com/antfu/eslint-config)。

最后使用的阿里的前端规约[eslint-config-ali](https://github.com/alibaba/f2e-spec)，因为它文档依据写的很好。

并没有添加太多的配置，主要是忽略掉ArcGIS JS 的静态文件和Umi的运行文件，详见[eslint.config.js](https://github.com/GeoDaoyu/Chu/blob/main/eslint.config.js)。
