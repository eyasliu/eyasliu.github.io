import style from './style.scss';


export default ({data}) => (
  <div className={style.tags}>
    {data.content.map(item => (
      <Link to={item.link}>{item.title}</Link>
    ))}
  </div>
)