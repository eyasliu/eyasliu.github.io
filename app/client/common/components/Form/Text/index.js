
export default class FormText extends Component{
  constructor(props){
    super();
    this.state = {
      value: props.value || ''
    }
  }

  static defaultProps = {
    tag: 'span',
    value: ''
  }

  changeHandler(e){
    this.setState({value: e.target.innerText})
    this.props.onChange && this.props.onChange(e.target.innerText.trim());
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value
    })
  }

  render(){
    return (
      React.createElement(this.props.tag, {
        contentEditable: true,
        ...this.props,
        dangerouslySetInnerHTML: {
          __html: this.state.value
        },
        'data-name': this.props.name,
        onInput: ::this.changeHandler,
        onChange: ::this.changeHandler
      })
    )
  }
}