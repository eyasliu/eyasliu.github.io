import style from './style.scss';

export default class Item extends Component{
  constructor(props){
    super();
    this.state = {
      editing: false
    }
  }

  render(){
    return (
      <div className={style.add}>
        {this.state.editing ?
          <div className={style.edit}>
            <UserCard name="Yuesong Liu"></UserCard>
            <div className={style.editarea}>
              <textarea name="content" placeholder="填写备注"></textarea>
              <button>发布</button>
              <button onClick={e => {this.setState({editing: false})}}>取消</button>
            </div>
          </div>
          : 
          <div className={cx(style.placeholder)} onClick={e => {
            // this.setState({editing: true})
            window.open('http://github.com/' + config.github.user + '/' + config.github.repo + '/issues/' + this.props.id)
          }}>
            <UserCard name="" className={style.inline}></UserCard> 
            <span>点击添加评论</span>
          </div>
        }
      </div>
    )
  }
}