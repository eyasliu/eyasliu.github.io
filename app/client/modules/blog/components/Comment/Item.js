import style from './style.scss';

export default class Item extends Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div className={style.Item}>
        <UserCard name="Yuesong Liu" text="test"></UserCard>
        <div className={style.content}>
          this is a test comment 这是中文测试文字
        </div>
      </div>
    )
  }
}