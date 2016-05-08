/*ace*/

import brace from 'brace';
import Ace from 'react-ace';
import style from './style/textarea.scss';

import 'brace/theme/github';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    require('brace/mode/' + props.mode);
    this.state = {};
  }

  static defaultProps = {
    mode: 'markdown',
  };

  handlerChange(val) {
    this.props.changeText(val);
    this.refs.textarea.value = val;
  }

  render() {
    return (
      <div className={cx(this.props.className, style['textarea-container'])}>
        <textarea value={this.props.text} ref="textarea" name={this.props.name} style={{display: 'none'}}></textarea>
        <Ace
          mode="markdown"
          theme="github"
          value={this.props.text}
          onChange={::this.handlerChange}
          highlightActiveLine wrapEnabled
          showPrintMargin={false}
          editorProps={{$blockScrolling: true}}
         />
      </div>
    );
  }
}