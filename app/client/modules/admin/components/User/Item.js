import style from './style.scss';

export default class Item extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr className={style.item}>
        <td>
          <UserCard></UserCard>
        </td>
        <td>
          <i className="fa fa-times"></i>
        </td>
      </tr>
    );
  }
}
