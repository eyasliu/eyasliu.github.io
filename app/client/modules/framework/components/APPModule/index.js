import Navbar from '../navbar';
import Test from './test';
import style from './style.scss';
import BackTop from 'cc/BackTop';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <BackTop></BackTop>
        <div className={style.moduleContainer}>
          {this.props.children}
        </div>
      </div>
      );
  }
}
