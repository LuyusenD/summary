import React from 'react'
import Child from './demo2'

export default class Parent extends React.Component{
  render(){
    return (
      <div>
        Homes
        <Child />
      </div>
    )
  }
}