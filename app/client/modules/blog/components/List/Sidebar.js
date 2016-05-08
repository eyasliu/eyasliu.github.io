/**
 * Created by Eyas on 2016/4/19.
 * 组织右边栏
 */
import Sidebar from '../Sidebar';
import style from './style.scss';

export default class SidebarList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={style.sidebar}>
        <Sidebar></Sidebar>
      </div>
    )
  }
}