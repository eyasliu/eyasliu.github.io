import style from './style.scss';

const UserCard = props => (
  <div className={cx(style.usercard, "clearfix", props.className)}>
    <div className={style.avatar}>
      <img src={props.avatar} alt={props.name} />
    </div>
    <div className={cx({
      [style.text]: true,
      [style.onlyname]: !props.text
    })}>
      <h5>{props.name}</h5>
      {!props.text ? '' : <p>{props.text}</p>}
    </div>
  </div>
)

UserCard.defaultProps = {
  name: 'Eyas Liu',
  text: '',
  avatar: require('./default.jpg')
}

export default UserCard;