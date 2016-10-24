import style from './style.scss';

export default ({data}) => (
  <div className={style.Item}>
    <UserCard 
      name={data.user.login} 
      text={data.created_at}
      avatar={data.user.avatar_url}
    ></UserCard>
    <div className={style.content + ' markdown-body'} dangerouslySetInnerHTML={{__html: marked(data.body)}}>
      
    </div>
  </div>
)