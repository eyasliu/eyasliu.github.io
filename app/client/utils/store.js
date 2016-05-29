import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import thunk from 'redux-thunk';


export let defaultMiddlewares = [applyMiddleware(thunk)];

// if (process.env.NODE_ENV === 'development') {
defaultMiddlewares = defaultMiddlewares.concat([
  window.devToolsExtension ? window.devToolsExtension() : f => f
]);
// }

export default function createStoreWithMiddleware(middlewares = []) {
  return (...args) => {
    return compose(
      ...middlewares,
      ...defaultMiddlewares,
    )(createStore)(...args);
  };
}
