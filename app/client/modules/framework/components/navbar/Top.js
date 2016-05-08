/**
 * Created by Eyas on 2016/4/18.
 */
import style from "./style.scss";

export default class Top extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className={style.top}>
        <div className={style.logo}>
          Eyasliu
          {/*<img src="http://gravatar.oschina.net/avatar/2498d1cac9d0a9859fc6bf8d09702180?s=100" alt=""/>*/}
        </div>
        <div className={style.action}>
          {/*<span><i className="fa fa-heart"></i></span>
          <span><Link to="/blog/search"><i className="fa fa-search"></i></Link></span>*/}
          {/*<span><Link to="/user"><i className="fa fa-user"></i></Link></span>
          <span><Link to="/user/signup">注册</Link> | <Link to="/user/login">登录</Link></span>
          <span><Link to="/admin/info">管理面板</Link></span>*/}
        </div>

      </div>
    )
  }
}