import style from './style.scss';
import List from './List';

export default class Search extends React.Component {
  constructor(props) {
    super();
    const keyword = props.params.keyword;
    this.state = {
      keyword: keyword || ''
    }
  }

  render() {
    const data = this.props;
    return (
      <div className={style.search}>
        <div className={style.header}>
          <FormText tag="h1" value={this.state.keyword} className={style.input} placeholder="输入关键字搜索" />
        </div>
        {this.state.keyword ? <List></List> : ''}
      </div>
    );
  }
}
