import style from './style.scss';
import SignupForm from 'user/components/Auth/Signup';

export default class Edit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.edit}>
        <SignupForm title="添加用户"></SignupForm>
      </div>
    );
  }
}
