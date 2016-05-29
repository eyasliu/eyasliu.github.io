import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';

export default (store => ({children}) =>  (
    <Provider store={store}>
      <APPModule>
        {children}
      </APPModule>
    </Provider>
  )
)(createStore()(reducers))