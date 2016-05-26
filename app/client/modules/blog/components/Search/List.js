import style from './style.scss';
import Item from '../Post/Item';

export default ({data}) => (
  <div className={style.list}>
    {data && data.length && data.map(item => (
      <Item {...this.props} data={item}></Item>
    ))}
  </div>
);
