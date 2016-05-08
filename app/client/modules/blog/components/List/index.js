/*
 * 列表页
 */
import Post from "./Post";
import Sidebar from "./Sidebar";
import style from "./style.scss";
import * as postActions from 'common/actions/post';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators(postActions, dispatch)
)
export default class List extends Component {
  constructor(props) {
    super();
    props.getList();
  }

  render() {
    return (
      <div className={cx(style.list, "clearfix")}>
        <Post {...this.props}></Post>
        <Sidebar></Sidebar>
      </div>
    )
  }
}