import React from 'react'

export default class Demo extends React.Component{
  render () {
    return (
      <div>
        这是组合键
        {this.props.children}
      </div>
    )
  }
}