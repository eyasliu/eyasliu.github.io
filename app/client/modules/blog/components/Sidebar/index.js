/**
 * Created by Eyas on 2016/4/19.
 */
import style from './style.scss';
import Block from './Block';

@connect(
  state => state.blog.sidebar
)
export default class Sidebar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {list} = this.props;
    return (
      <div className={style.sidebar}>
        {list.map(item => <Block type={item.type} data={item} />)}

      </div>
    )
  }
}