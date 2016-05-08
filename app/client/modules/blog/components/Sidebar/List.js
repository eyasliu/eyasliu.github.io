import style from './style.scss';


export default class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {data} = this.props;
    return (
      <div className={style.list}>
        <ul>
        {data.content.map(item => (
          <li>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}