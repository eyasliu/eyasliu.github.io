import Textarea from './Ace';
import Preview from './Preview';

import style from './style/editor.scss';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      isPreview: false,
      name: 'content'
    };
  }

  static defaultProps = {
    preview: 'tab',
    text: ''
  };

  changeText(newText) {
    this.setState({
      text: newText
    });
    return true;
  }

  tabTo(target) {
    this.setState({
      isPreview: target === 'preview'
    });
  }
  componentWillReceiveProps(nextProp){
    this.setState({
      text: nextProp.text
    });
  }

  render() {
    let navEl = '';
    if (this.props.preview === 'tab') {
      navEl = (
        <div className={style.nav}>
          <ul>
            <li className={cx({
              [style.active]: !this.state.isPreview
            })} onClick={e => {this.tabTo('edit');}}>编辑</li>
            <li className={cx({
              [style.active]: this.state.isPreview
            })} onClick={e => {this.tabTo('preview');}}>预览</li>
          </ul>
        </div>);
    }
    return (
<div className={style.editor}>
  {navEl}
  <div className={cx({
    [style['edit-area']]: true,
    [style[this.props.preview]]: true,
    [style['on-preview']]: this.state.isPreview
  })}>
    <Textarea text={this.state.text} name={this.props.name} className={style.textarea} changeText={::this.changeText} mode="markdown" />
    <Preview className={style.preview} text={this.state.text} />
  </div>
</div>
    );
  }
}