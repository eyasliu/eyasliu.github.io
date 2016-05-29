import style from './style.scss';
import Item from '../Post/Item';

export default props => (
  <div className={style.list}>
    {props.data && props.data.length ? props.data.map(item => (
      <Item {...props} data={item}></Item>
    )) : <Loading text="无搜索结果"></Loading>}
  </div>
);
