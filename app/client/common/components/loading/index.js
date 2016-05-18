import style from './style';

export default class Loading extends Component {
  constructor() {
    super();
  }

  static defaultProps = {
    text: '',
    color: '#555'
  };

  addDivs() {
    const div = [];
    for (let i = 0; i < 5; i++) {
      div.push(<div style={{backgroundColor: this.props.color}} key={i}></div>);
    }
    return div;
  }

  render() {
    return (
      <div className={style.loader}>
        <div className="loader">
          <div className={cx('loader-inner', 'line-scale-pulse-out')}>
            {this.props.text || this.addDivs()}
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}