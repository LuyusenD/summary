import React from 'react'

export default class SetStateDemo extends React.Component{
  constructor () {
    super()
    this.state = {
      count : 0
    }
  }

  handler =async () => {
    await this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);
  }

  setStateAsync (state) {
    //愚蠢
    return new Promise((open) => {
      this.setState(state,open)
    })
  }

  render(){
    return (
      <div>
        setState 同步 还是 异步 <br/>
        <p>
          count: <span>{ this.state.count }</span>
        </p>
        <button onClick={ this.handler }>修改</button>
      </div>
    )
  }
}