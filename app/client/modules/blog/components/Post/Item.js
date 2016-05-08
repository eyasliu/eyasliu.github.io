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
            <Link to={"/blog/detail/" + data.number}>
              <section className={style.section}>
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
                <footer className={cx(style.footer, "clearfix")}>
                  <div className={style.leftBtn}>
                    <span>
                      <i className="fa fa-tags"></i> 5
                    </span>
                  </div>
                  <div className={style.rightBtn}>
                    <span>
                      <i className="fa fa-comment-o"></i> {data.comments}
                    </span>
                  </div>
                </footer>
              </section>
            </Link>
          </article>
        </div>
      </div>
    )
  }
}