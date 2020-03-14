import React from 'react'

/**
 * 高阶组件 三点
 * 
 * 1. function 
 * 2. params component
 * 3. return component
 */
const withFetch = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
}

const Item = (props) => {
  return(
    <div>
      Item: {props.data}
    </div>
  )
}

const WithFetch = withFetch(Item)

export default class Demo4 extends React.Component {
  render() {
    return (
      <div>
        高阶组件
        {/* <Item data="isData"/> */}
        <WithFetch data="isData" />
      </div>
    )
  }
}