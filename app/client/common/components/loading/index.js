import 'loaders.css';
import style from './style';

export default class Loading extends Component {
  constructor() {
    super();
  }

  static defaultProps = {
    name: 'line-scale-pulse-out',
    color: '#555'
  };

  addDivs(animate) {
    const divs = {
      'ball-pulse': 3,
      'ball-grid-pulse': 9,
      'ball-clip-rotate': 1,
      'ball-clip-rotate-pulse': 2,
      'square-spin': 1,
      'ball-clip-rotate-multiple': 2,
      'ball-pulse-rise': 5,
      'ball-rotate': 1,
      'cube-transition': 2,
      'ball-zig-zag': 2,
      'ball-zig-zag-deflect': 2,
      'ball-triangle-path': 3,
      'ball-scale': 1,
      'line-scale': 5,
      'line-scale-party': 4,
      'ball-scale-multiple': 3,
      'ball-pulse-sync': 3,
      'ball-beat': 3,
      'line-scale-pulse-out': 5,
      'line-scale-pulse-out-rapid': 5,
      'ball-scale-ripple': 1,
      'ball-scale-ripple-multiple': 3,
      'ball-spin-fade-loader': 8,
      'line-spin-fade-loader': 8,
      'triangle-skew-spin': 1,
      'pacman': 5,
      'ball-grid-beat': 9,
      'semi-circle-spin': 1
    };
    const divCount = divs[animate];
    const div = [];
    for (let i = 0; i < divCount; i++) {
      div.push(<div style={{backgroundColor: this.props.color}} key={i}></div>);
    }
    return div;
  }

  render() {
    return (
      <div className={style.loader}>
        <div className="loader">
          <div className={cx('loader-inner', this.props.name)}>
            {this.addDivs(this.props.name)}
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}