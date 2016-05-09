import style from './Item.scss';
import ast from './Article.scss';

export default class Article extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const {data} = this.props;
    const {user, labels} = data;
    return (
      <div className={style.articlePage}>
        <div className={style.inner}>
          <article className={style.main}>
            <section className={style.section}>
              <header className={style.header}>
                <div className={style.thumb}>
                  {data.thumb ? <img src={data.thumb} alt={data.title}/> : ''}
                </div>
                <h1>{data.title}</h1>
              </header>
              <div className={cx(ast.content, "markdown-body")} dangerouslySetInnerHTML={{__html: marked(data.body)}}>

              </div>
              <div className={ast.labels}>
              </div>
            </section>
            <footer className={ast.footer}>
              <div className={ast.user}>
                <UserCard 
                  name={user.login} 
                  text={data.created_at}
                  avatar={user.avatar_url}
                ></UserCard>
              </div>
            </footer>
          </article>
        </div>
      </div>
    )
  }
}