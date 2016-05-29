import style from './style';

const Loading = props => {
  const addDivs = () => {
    const div = [];
    for (let i = 0; i < 5; i++) {
      div.push(<div style={{backgroundColor: props.color}} key={i}></div>);
    }
    return div;
  }

  return (
    <div className={style.loader}>
      <div className="loader">
        <div className={cx('loader-inner', 'line-scale-pulse-out')}>
          {props.text || addDivs()}
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

Loading.defaultProps = {
  text: '',
  color: '#555'
}

export default Loading;
