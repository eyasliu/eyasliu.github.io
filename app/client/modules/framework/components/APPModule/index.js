import Navbar from '../navbar';
import Test from './test';
import style from './style.scss';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className={style.moduleContainer}>
          {this.props.children}
        </div>
      </div>
      );
  }
}
