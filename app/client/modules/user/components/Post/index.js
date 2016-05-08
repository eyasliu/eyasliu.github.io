import style from './style.scss';
import Tabs from './Tabs';
import * as postActions from 'common/actions/post';


class Post extends Component{
  constructor(props){
    super();
    // props.getList();
  }



  render(){
    return (
      <div className={style.post}>
        <Tabs>
          {this.props.children}
        </Tabs>
      </div>
    )
  }
}

export default connect(
  state => state.user.post,
  dispatch => bindActionCreators(postActions, dispatch)
)(Post)