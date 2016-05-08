import style from './style.scss';
import Add from './Add';
import Item from './Item';

export default class UserCard extends Component{
  constructor(props){
    super();
  }

  render(){
    const {data} = this.props;
    return (
      <div className={style.comment}>
        <Add></Add>
        {data.map(item => <Item data={item} />)}
      </div>
    )
  }
}