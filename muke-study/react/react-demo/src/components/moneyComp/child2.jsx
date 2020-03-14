import React from 'react'

export default class Child2 extends React.Component{
  render () {
    return (
      <div>
        <input type="text" value={ this.props.value * 7 } onChange={this.props.handler}/>
      </div>
    )
  }
}