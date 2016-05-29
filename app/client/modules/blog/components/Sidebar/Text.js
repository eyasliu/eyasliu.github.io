import style from './style.scss';


export default ({data}) => <div className={style.text} dangerouslySetInnerHTML={{__html: marked(data.content)}}></div>