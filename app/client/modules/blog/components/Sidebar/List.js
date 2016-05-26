import style from './style.scss';

export default ({data}) => (
  <div className={style.list}>
    <ul>
    {data.content.map(item => (
      <li>
        <Link to={item.link}>{item.title}</Link>
      </li>
    ))}
    </ul>
  </div>
)

