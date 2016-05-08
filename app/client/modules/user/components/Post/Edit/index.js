import style from './style.scss';
import Markdown from 'cc/Markdown';
import * as postActions from 'common/actions/post';
import TagsInput from 'cc/TagsInput';

@connect(
  state => ({data: state.user.post.edit}),
  dispatch => bindActionCreators(postActions, dispatch)
)
export default class Edit extends Component{
  constructor(props){
    super();
    if(props.params.id){
      props.getDetail(props.params.id)
    } else {
      props.updateEdit({})
    }

    this.state = {
      tags: []
    }
  }

  static defaultProps = {
    data: {}
  }

  submitHandler(e){
    const formdata = formToObj(this.refs.edit);
    if(this.props.data.id){
      this.props.update(this.props.data.id, formdata)
    }else{
      this.props.add(formdata)
    }
    RouterHistory.push('/user/post/list');
    e.preventDefault()
  }

  delPost(e){
    this.props.del(this.props.data.id);
    RouterHistory.push('/user/post/list');
  }

  renderEdit(data){
    return (
      <form onSubmit={::this.submitHandler} ref="edit" className={style.edit}>
        <div className={style.inner}>
          <div className={style.btns}>
            <button type="submit">发布</button>
            {data.id ? <button type="button" className={style.del} onClick={::this.delPost}>删除</button> : ''}
          </div>
          <div className={style.header}>
            <FormText tag="h3" placeholder="标题" name="title" value={data.title} />
          </div>
          <TagsInput className={style.tag} name="tags" value={this.state.tags} onChange={tags => this.setState({tags})}></TagsInput>
         
          <div className={style.content}>
            <div className={style.editor}>
              <Markdown text={data.content} name="content" />
            </div>
          </div>
        </div>
      </form>
    )
  }

  render(){
    const {data} = this.props;
    return (this.props.params.id && data.id) || !this.props.params.id ? this.renderEdit(data) : <Loading></Loading>
  }
}