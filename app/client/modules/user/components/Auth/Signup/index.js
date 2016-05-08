import style from '../style.scss';
import Form from '../Form';

export default class Signup extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    title: '注册'
  }

  render() {
    const data = this.props;
    return (
      <Form title={this.props.title}>
        <div className={style.form}>
            <div className={style.control}>
              <input type="text" name="username" placeholder="用户名" />
            </div>
            <div className={style.control}>
              <input type="text" name="username" placeholder="邮箱" />
            </div>
            <div className={style.control}>
              <input type="password" name="password" placeholder="密码" />
            </div>
            <div className={style.control}>
              <input type="password" name="password" placeholder="重复密码" />
            </div>
          </div>
          <div className={style.footer}>
            <button className={cx(style.btn, style.submit)}>提交</button>
            <Link to="/user/login" className={cx(style.btn, style.reset)}>我有账号</Link>
          </div>
      </Form>
    );
  }
}
