import style from './Item.scss';

export default class Post extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const {data} = this.props;
    return (
      <div className={style.item}>
        <div className={style.inner}>
          <article className={style.article}>
            <Link to={"/blog/detail/" + data.id}>
              <section className={style.section}>
                <header className={style.header}>
                  <div className={style.user}>
                    <UserCard text={data.updatedAt}></UserCard>
                  </div>
                  <div className={style.thumb}>
                    {data.thumb ? <img src={data.thumb} alt={data.title}/> : ''}
                  </div>
                  <h3>{data.title}</h3>
                </header>
                <div className={cx(style.content, "markdown-body")} dangerouslySetInnerHTML={{__html: data.content}}></div>
                <div className={style.more}>
                  <span>Read More</span>
                </div>
                <footer className={cx(style.footer, "clearfix")}>
                  <div className={style.leftBtn}>
                    <span>
                      <i className="fa fa-heart-o"></i> 5
                    </span>
                  </div>
                  <div className={style.rightBtn}>
                    <span>
                      <i className="fa fa-comment-o"></i> 2
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