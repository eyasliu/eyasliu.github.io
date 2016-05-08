import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


export let defaultMiddlewares = [applyMiddleware(thunk)];

if (config.debug && config.devtool) {
  defaultMiddlewares = defaultMiddlewares.concat([
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ]);
}

export default function createStoreWithMiddleware(middlewares = []) {
  return (...args) => {
    return compose(
      ...middlewares,
      ...defaultMiddlewares,
    )(createStore)(...args);
  };
}
