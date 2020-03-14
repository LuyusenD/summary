import React from 'react'

export default class Child1 extends React.Component{

  constructor () {
    super()
  }
  
  render () {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={ this.props.handler }/>
      </div>
    )
  }
}