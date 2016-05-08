import style from './style.scss';
import Item from './Item';
import * as postActions from 'common/actions/post';

@connect(
  state => ({post: state.user.post}),
  dispatch => bindActionCreators(postActions, dispatch)
)
export default class List extends Component{
  constructor(props, context){
    super();
    props.getList();
  }

  static defaultProps = {
    list: []
  };

  // static childContextTypes = {

  // }

  render(){
    const {list} = this.props.post;
    return (
      <div>
        <div className={style.header}>
          <Link className={style.new} to="/user/post/new">添加新文章</Link>
        </div>
        {list && list.length ? 
          list.map(item => <Item {...this.props} data={item} />) : <Loading></Loading>
        }
      </div>
    )
  }
}
