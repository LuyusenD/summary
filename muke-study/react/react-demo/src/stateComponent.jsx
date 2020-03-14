import React from 'react'

export default class StateComponent extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      count: 10,
      flag: true
    }
    
  }
  add = () => {
    let count = this.state.count += 1
    this.setState({
      count: count,
      flag: count % 2 == 0 ? true : false
    })
  }
  remove () {
    let count = this.state.count -= 1
    this.setState({
      count: count,
      flag: count % 2 == 0 ? true : false
    })
  }
  handler = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    let showName = this.state.flag ? 'Tom' : 'Freey'
    return (
      <div>
        <h3>count： {this.state.count }</h3>
        <button onClick={ this.add }>增加</button>
        <button onClick={ this.remove.bind(this)}>减少</button>
        <p>{showName}</p>
        <button onClick={ this.handler }>transform</button>
      </div>
    )
  }
}