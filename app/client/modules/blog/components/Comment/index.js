import style from './style.scss';
import Add from './Add';
import Item from './Item';

export default class UserCard extends Component{
  constructor(props){
    super();
  }

  render(){
    const {data, post} = this.props;
    return (
      <div className={style.comment}>
        <Add id={post.number}></Add>
        {data && data.length ? data.map(item => <Item data={item} />) : ''}
      </div>
    )
  }
}