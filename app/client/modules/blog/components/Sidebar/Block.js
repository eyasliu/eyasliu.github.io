import style from './style.scss';
import List from './List';
import Tags from './Tags';
import Text from './Text';

export default class Block extends Component {
  constructor(props) {
    super();
  }

  renderContent(type, data){
    switch(type){
      case "list": 
        return <List data={data}></List>;
      case "tags":
        return <Tags data={data}></Tags>
      case "text":
      default:
        return <Text data={data}></Text>
    }
  }

  render() {
    const {data} = this.props;
    return (
      <div className={style.block}>
        <div className={style.header}>
          <h3>{data.title}</h3>
          <h4>{data.subtitle}</h4>
        </div>
        <div className={style.content}>
          {this.renderContent(this.props.type, data)}
        </div>
      </div>
    )
  }
}