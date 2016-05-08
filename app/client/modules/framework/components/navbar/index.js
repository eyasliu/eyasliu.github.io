import style from "./style.scss";
import Menu from "./Menu";
import Top from "./Top";

class Navbar extends React.Component {
  constructor() {
    super();
  }
  
  static defaultProps = {
    text: 'test'
  };

  static childContextTypes = {
    navbar: PropTypes.object
  }

  getChildContext(){
    return {
      navbar: this.props
    }
  }
  
  render() {
    return (
      <div className={style.navbar}>
        <div className={style.inner}>
          <Top {...this.props} />
          <Menu data={this.props.navbar} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.info
)(Navbar)
