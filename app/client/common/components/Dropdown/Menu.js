import style from './style.scss';

export default class UserCard extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    name: 'Eyas Liu',
    text: '',
    avatar: 'http://gravatar.oschina.net/avatar/2498d1cac9d0a9859fc6bf8d09702180?s=100'
  }

  render(){
    return (
      <div className={style.menu}>
        <ul>
          <li>
            this is a test menu
          </li>
          <li>
            this is a test menu
          </li>
          <li>
            this is a test menu
          </li>
          <li>
            this is a test menu
          </li>
        </ul>
      </div>
    )
  }
}