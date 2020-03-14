import React from 'react'

//props 不可以被修改,只能在父组件该属性
export default class Nav extends React.Component{
  render(){
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <ul>
          {
            this.props.nav.map((value, index) => {
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </div>
    )
  }
}