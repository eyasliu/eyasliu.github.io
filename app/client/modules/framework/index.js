import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';

export default (store => props =>  (
    <Provider store={store}>
      <APPModule {...props} />
    </Provider>
  )
)(createStore()(reducers))