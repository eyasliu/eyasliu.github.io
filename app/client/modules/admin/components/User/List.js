import style from './style.scss';
import Item from './Item';

export default class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.user}>
        <div className={style.header}>
          <Link className={style.new} to="/admin/user/new">新建用户</Link>
        </div>
        <div className={style.list}>
          <table>
            <thead>
              <tr>
                <th>用户</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
