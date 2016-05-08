import style from './style.scss';

export default class Form extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    title: "登录"
  }

  render() {
    const data = this.props;
    return (
      <div className={style.login}>
        <div className={style.inner}>
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}
