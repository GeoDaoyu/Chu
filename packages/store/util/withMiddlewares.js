export const withMiddlewares = (store, middlewares) => {
  return (set, get, api) => {
    const config = store(set, get, api);

    return middlewares.reduce((acc, middleware) => {
      return middleware(() => acc)(set, get, api);
    }, config);
  };
};
