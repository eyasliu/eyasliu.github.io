import style from './style.scss';

export default class Item extends Component{
  constructor(props){
    super();
  }

  render(){
    const {data} = this.props;
    const {user} = data;
    return (
      <div className={style.Item}>
        <UserCard 
          name={user.login} 
          text={data.created_at}
          avatar={user.avatar_url}
        ></UserCard>
        <div className={style.content} dangerouslySetInnerHTML={{__html: marked(data.body)}}>
          
        </div>
      </div>
    )
  }
}