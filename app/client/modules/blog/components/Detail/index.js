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
    props.getDetail(props.params.id)
    props.getComments(props.params.id)
  }

  renderDetail(props){
    return (
      <div>
        <Article data={props.data}></Article>
        <Comment post={props.data} data={props.comments}></Comment>
      </div>
    )
  }

  render(){
    const {data} = this.props;
    return data && data.number && data.number == this.props.params.id ? this.renderDetail(this.props) : <Loading></Loading>
  }
}