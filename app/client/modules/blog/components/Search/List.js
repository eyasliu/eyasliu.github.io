import style from './style.scss';
import Item from '../Post/Item';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props;
    return (
      <div className={style.list}>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    );
  }
}
