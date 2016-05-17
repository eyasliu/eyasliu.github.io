/*
 * 列表页
 */
import Post from "./Post";
import Sidebar from "./Sidebar";
import style from "./style.scss";
import * as postActions from 'common/actions/post';
import * as listActions from 'blog/actions/list';
import * as starActions from 'common/actions/star';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators({
    postAct: postActions,
    listAct: listActions,
    starAct: starActions
  }, dispatch)
)
export default class List extends Component {
  constructor(props) {
    super();
    if(props.route.path === 'star'){
      props.starAct.getList();
    }else{
      props.postAct.getList({
        ...props.listParam,
        labels: props.params.tagname
      });
    }

    props.postAct.getSidebar();
    utils.setTitle('文章列表' + (props.params.tagname ? (' | 标签: ' + props.params.tagname) : '') + ' | Blog')
  }

  componentWillReceiveProps(nextProps){
    if(this.props.route.path !== 'star' && nextProps.route.path === 'star'){
      nextProps.starAct.getList();
    } else if(this.props.params.tagname !== nextProps.params.tagname){
      nextProps.postAct.getList({
        ...this.props.listParam,
        labels: nextProps.params.tagname
      })
    } else if(this.props.route.path !== 'list' && nextProps.route.path === 'list'){
      nextProps.postAct.getList({})
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