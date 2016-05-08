import style from "./style.scss";

export default class BlogModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.blog}>
        <div className={style.inner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
