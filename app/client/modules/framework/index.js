import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';


const store = createStore()(reducers);

export default
class FrameWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <APPModule>
            {this.props.children}
          </APPModule>
        </Provider>
      </div>
    );
  }
}
