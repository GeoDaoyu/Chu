import { create } from 'zustand';
import { compose } from 'ramda';

const withMiddlewares = (storeCreator, middlewares) =>
  create(compose(...middlewares)(storeCreator));

export default withMiddlewares;
