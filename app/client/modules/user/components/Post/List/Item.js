import style from './style.scss';
export default class Item extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    data: {}
  }

  render(){
    const {data} = this.props;
    return (
      <div className={style.item}>
        <Link to={"/user/post/edit/" + data.id}>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
          <div className={style.attr}>
            <span>发布时间: {data.createdAt}</span>
            <span>5分钟前</span>
          </div>
        </Link>
      </div>
    )
  }
}
