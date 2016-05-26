/**
 * Created by Eyas on 2016/4/18.
 */
import style from "./menu.scss";

const Menu = ({data}) => (
  <div className={style.menu}>
    <ul className={style.list}>
      {data.map(item => (
        <li className={style.item}><Link to={item.link}>{item.label}</Link></li>
      ))}
    </ul>
  </div>
)

Menu.defaultProps = {
  data: []
}

export default Menu