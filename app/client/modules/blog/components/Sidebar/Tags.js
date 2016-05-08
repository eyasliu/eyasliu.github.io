import style from './style.scss';


export default class Tags extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {data} = this.props;
    return (
      <div className={style.tags}>
        {data.content.map(item => (
          <Link to={item.link}>{item.title}</Link>
        ))}
      </div>
    )
  }
}