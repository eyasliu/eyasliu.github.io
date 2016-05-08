import style from './style.scss';

export default class Tabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.tabs}>
        <ul className="clearfix">
          <li className={style.active}><Link to="/admin/info">设置</Link></li>
          <li><Link to="/admin/user">用户</Link></li>
        </ul>
        <div className={style.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
