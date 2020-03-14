import React from 'react'
import Child1 from './child1'
import Child2 from './child2'
export default class Parent extends React.Component{
  constructor () {
    super()

    this.state = {
      rmbValue: 0
    }

  }

  RmbChange = (e) => {
    this.setState({
      rmbValue : e.target.value
    })
    console.log(e.target.value);
  }

  UsChange = (e) => {
    this.setState({
      rmbValue : e.target.value / 7
    })
    console.log(e.target.value);
  }
  render () {
    return (
      <div>
        <p>Parent</p>
        RMB: <Child1 value = {this.state.rmbValue} handler={ this.RmbChange }/>
        US: <Child2 value = { this.state.rmbValue } handler={ this.UsChange }/>
      </div>
    )
  }
}