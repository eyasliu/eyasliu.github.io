import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';

export default (rootReducer => props => {
  const store = createStore()(rootReducer);
  return (
    <Provider store={store}>
      <APPModule>
        {props.children}
      </APPModule>
    </Provider>
  )
})(reducers)