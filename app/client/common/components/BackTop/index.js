export default () => (
  <div className="back-top" onClick={e => {
    document.body.scrollTop = 0;
  }}>
    <i className="fa fa-arrow-up"></i>
  </div>
)