import style from './style.scss';

export default class UserCard extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    name: 'Eyas Liu',
    text: '',
    avatar: require('./default.jpg')
  }

  render(){
    return (
      <div className={cx(style.usercard, "clearfix", this.props.className)}>
        <div className={style.avatar}>
          <img src={this.props.avatar} alt={this.props.name} />
        </div>
        <div className={cx({
          [style.text]: true,
          [style.onlyname]: !this.props.text
        })}>
          <h5>{this.props.name}</h5>
          {!this.props.text ? '' : <p>{this.props.text}</p>}
        </div>
      </div>
    )
  }
}