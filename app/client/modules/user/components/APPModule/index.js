import style from "./style.scss";

export default class UserModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.user}>
        {this.props.children}
      </div>
    );
  }
}
