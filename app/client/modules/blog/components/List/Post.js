/**
 * Created by Eyas on 2016/4/19.
 * 组织文章列表
 */
import style from './style.scss';
import Item from '../Post/Item';

export default props => (
  <div className={style.post}>
    {props.params.tagname ? (
      <div className={style.help}>
        标签：{props.params.tagname}
      </div>
    ) : ''}
    {props.data && props.data.length ? props.data.map(item => 
      <Item {...props} data={item} />
    ) : <Loading text={props.isOver ? '加载完成' : ''}></Loading>}
  </div>
)
