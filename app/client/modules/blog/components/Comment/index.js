import style from './style.scss';
import Add from './Add';
import Item from './Item';

export default ({post}) => (
  <div className={style.comment}>
    <Add id={post.number}></Add>
    {post.comments && post.comments.length ? post.comments.map(item => <Item data={item} />) : ''}
  </div>
)