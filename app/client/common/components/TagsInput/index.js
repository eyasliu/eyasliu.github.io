import {MultiSelect} from 'react-selectize';
import 'react-selectize/themes/index.css';

export default class TagsInput extends Component{
  constructor(props){
    super();
  }

  addTag(options, values, search){
    const labels = values.map(value => value.label); 
    if (search.trim().length == 0 || labels.indexOf(search.trim()) != -1) {
      return null;  
    }
    return {label: search.trim(), value: search.trim()};
  }

  render(){
    return (<MultiSelect
      createFromSearch={::this.addTag}
      placeholder="请输入标签"
      {...this.props}
    />)
  }
}