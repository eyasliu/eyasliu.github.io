import style from './style.scss';

export default class Post extends Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div className={cx(style.tabs, 'clearfix')}>
        <div className={cx(style.tabnav, 'clearfix')}>
          <ul>
            <li className={style.active}>已发布</li>
            <li>旧文章</li>
            <li>回收站</li>
          </ul>
        </div>
        <div className={style.main}>
          {this.props.children}
        </div>
      </div>
    )
  }
}