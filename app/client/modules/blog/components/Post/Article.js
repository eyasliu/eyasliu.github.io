import style from './Item.scss';
import ast from './Article.scss';

export default class Article extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const {data} = this.props;
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
              <div className={cx(style.content, "markdown-body")} dangerouslySetInnerHTML={{__html: data.content}}>

              </div>
            </section>
            {/*<footer className={ast.footer}>
              fdsafsdfdsa
            </footer>*/}
          </article>
        </div>
      </div>
    )
  }
}