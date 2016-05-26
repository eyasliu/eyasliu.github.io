/**
 * Created by Eyas on 2016/4/18.
 */
import style from "./style.scss";

export default props => (
  <div className={style.top}>
    <div className={style.logo}>
      {props.siteName}
    </div>
    <div className={style.action}>
      <span><Link to="/blog/search"><i className="fa fa-search"></i></Link></span>
      <span><Link to="/blog/star"><i className="fa fa-star"></i></Link></span>
    </div>
  </div>
)