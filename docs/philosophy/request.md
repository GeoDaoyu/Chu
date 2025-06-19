# 请求

请求默认使用Umi的[request](https://umijs.org/docs/max/request)。

## `service.js`

组件的请求尽量写在自己的`service.js`文件中，方便迁移。如，

```js
import { request } from "@umijs/max";

export async function getUser(token) {
  return request("/api/v1/getUser", {
    method: "GET",
    params: {
      token,
    },
  });
}
```

## 中间件

配置是看这里[axios](https://axios-http.com/)，下面是誊抄的`app.jsx`中的示例，

```js
export const request = {
  requestInterceptors: [
    // 直接写一个 function，作为拦截器
    (url, options) => {
      // do something
      return { url, options };
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (url, options) => {
        return { url, options };
      },
      (error) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (url, options) => {
        return { url, options };
      },
    ],
  ],
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data = {}, config } = response;
      // do something
      return response;
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (response) => {
        return response;
      },
    ],
  ],
};
```
