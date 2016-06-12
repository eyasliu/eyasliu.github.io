import style from './style.scss';
import List from './List';
import FormText from 'cc/Form/Text';
import * as postAct from 'common/actions/post';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators({postAct}, dispatch)
)
export default class Search extends React.Component {
  constructor(props) {
    super();
    const keyword = props.params.keyword;

    // 序列化，方便搜索
    const searchData = {};
    _.each(props.data, item => {
      searchData[item.number] = JSON.stringify(item)
    })

    this.state = {
      keyword: keyword || '',
      searchData
    }
  }

  searchHandler(val){
    this.setState({keyword: val})
    const result = [];
    _.each(this.state.searchData, (v, k) => {
      if(v.indexOf(val) > -1){
        result.push(k);
      }
    })
    this.props.postAct.getPostByIds(result);
  }

  render() {
    const data = this.props;
    return (
      <div className={style.search}>
        <div className={style.header}>
          <FormText tag="h1" value={this.state.keyword} className={style.input} placeholder="输入关键字搜索" onChange={::this.searchHandler} />
        </div>
        <List {...this.props}></List>
      </div>
    );
  }
}
