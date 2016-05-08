/*
 * 列表页
 */
import Post from "./Post";
import Sidebar from "./Sidebar";
import style from "./style.scss";
import * as postActions from 'common/actions/post';
import * as listActions from 'blog/actions/list';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators({...postActions, ...listActions}, dispatch)
)
export default class List extends Component {
  constructor(props) {
    super();
    props.getList();
    props.getTags()
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