import Navbar from '../navbar';
import style from './style.scss';
import BackTop from 'cc/BackTop';

export default props => (
  <div className="container">
    <Navbar />
    <BackTop></BackTop>
    <div className={style.moduleContainer}>
      {props.children}
    </div>
  </div>
)
