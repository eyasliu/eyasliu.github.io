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
    props.getList({
      ...props.listParam,
      labels: props.params.tagname
    });
    props.getTags()
    utils.setTitle('文章列表' + (props.params.tagname ? (' | 标签: ' + props.params.tagname) : '') + ' | Blog')
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.tagname !== nextProps.params.tagname){
      nextProps.getList({
        ...nextProps.params,
        labels: nextProps.params.tagname
      })
    }
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