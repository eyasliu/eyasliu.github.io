import style from "./style.scss";

export default ({children}) => (
  <div className={style.blog}>
    <div className={style.inner}>
      {children}
    </div>
  </div>
)
