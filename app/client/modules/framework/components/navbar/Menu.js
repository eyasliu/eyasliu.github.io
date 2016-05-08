/**
 * Created by Eyas on 2016/4/18.
 */
import style from "./menu.scss";

export default class Menu extends Component {
  constructor(props) {
    super()
  }

  static defaultProps = {
    data: []
  }

  render() {
    const {data} = this.props;
    return (
      <div className={style.menu}>
        <ul className={style.list}>
          {data.map(item => (
            <li className={style.item}><Link to={item.link}>{item.label}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}