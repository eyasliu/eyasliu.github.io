/**
 * Created by Eyas on 2016/4/19.
 * 组织文章列表
 */
import style from './style.scss';
import Item from '../Post/Item';

export default class Post extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const {data} = this.props;
    return (
      <div className={style.post}>
        {data && data.length ? data.map(item => <Item data={item} />) : <Loading></Loading>}
      </div>
    )
  }
}