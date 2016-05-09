import style from './Item.scss';

export default class Post extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const {data} = this.props;
    const {user, labels} = data;

    return (
      <div className={style.item}>
        <div className={style.inner}>
          <article className={style.article}>
              <section className={style.section}>
                <Link to={"/blog/detail/" + data.number}>
                  <header className={style.header}>
                    <div className={style.user}>
                      <UserCard 
                        name={user.login} 
                        text={data.created_at}
                        avatar={user.avatar_url}
                      ></UserCard>
                    </div>
                    <div className={style.thumb}>
                      {data.thumb ? <img src={data.thumb} alt={data.title}/> : ''}
                    </div>
                    <h3>{data.title}</h3>
                  </header>
                  <div className={cx(style.content, "markdown-body")} dangerouslySetInnerHTML={{__html: marked(data.body.substring(0, 200))}}></div>
                  <div className={style.more}>
                    <span>Read More</span>
                  </div>
                </Link>
                <footer className={cx(style.footer, "clearfix")}>
                  <div className={style.leftBtn}>
                    <span>
                      <i className="fa fa-tags"></i> 
                    </span>
                    {labels.map(item => (
                      <Link to={"/blog/tag/" + item.name}>{item.name}</Link>
                    ))}
                  </div>
                  <div className={style.rightBtn}>
                    <span>
                      <i className="fa fa-comment-o"></i> {data.comments}
                    </span>
                  </div>
                </footer>
              </section>
          </article>
        </div>
      </div>
    )
  }
}