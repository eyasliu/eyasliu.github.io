import style from './style.scss';

export default class Info extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.info}>
        <div className={style.inner}>
          <div className="form-control clearfix">
            <label htmlFor="siteName">站点名称</label>
            <div className="form-input">
              <input type="text" placeholder="站点名称" />
            </div>
          </div>
          <div className="form-control clearfix">
            <label htmlFor="siteName">站点名称</label>
            <div className="form-input">
              <input type="text" />
            </div>
          </div>
          <div className="form-control clearfix">
            <label htmlFor="siteName">站点名称</label>
            <div className="form-input">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
