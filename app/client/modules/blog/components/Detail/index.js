import Article from '../Post/Article';
import Comment from '../Comment';
import * as postActions from 'common/actions/post';

@connect(
  state => state.blog.detail,
  dispatch => bindActionCreators(postActions, dispatch)
)
export default class Detail extends Component{
  constructor(props){
    super();
    document.body.scrollTop = 0;
    props.getDetail(props.params.id)
    props.getComments(props.params.id)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.data && nextProps.data.number){
      utils.setTitle((nextProps.data.title ? nextProps.data.title : '文章详情') + ' | Blog')
    }
  }

  renderDetail(props){
    return (
      <div>
        <Article data={props.data}></Article>
        <Comment post={props.data} data={props.data.comments}></Comment>
      </div>
    )
  }

  render(){
    const {data} = this.props;
    return data && data.number && data.number == this.props.params.id ? this.renderDetail(this.props) : <Loading></Loading>
  }
}