import style from './style.scss';


export default class Text extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {data} = this.props;
    return (
      <div className={style.text} dangerouslySetInnerHTML={{__html: marked(data.content)}}></div>
    )
  }
}