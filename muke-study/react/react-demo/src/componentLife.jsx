import React from 'react' 

export default class ComponentLife extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      count: 10
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  shouldComponentUpdate(){
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handler = ()=>{
    this.setState({
      count: this.state.count += 1
    })
  }
  fuhandler = () => {
    console.log(this.props);
    this.props.clickChanges('我是子')
  }
  render() {
    let { count } = this.state
    return (
      <div>
        生命周期函数 :: {count} - {this.props.title}
        <button onClick={ this.handler }>add</button>
        <button onClick={ this.fuhandler } >fu</button>
      </div>
    )
  }
}