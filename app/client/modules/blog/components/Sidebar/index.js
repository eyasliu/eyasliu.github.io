/**
 * Created by Eyas on 2016/4/19.
 */
import style from './style.scss';
import Block from './Block';

export default connect(state => state.blog.sidebar)(
  ({list}) => (
  <div className={style.sidebar}>
    {list.map(item => <Block type={item.type} data={item} />)}
  </div>
))