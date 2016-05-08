import APPModule from './components/APPModule';

export default class Blog extends React.Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props;
    return (
      <APPModule {...this.props} />
    );
  }
}
