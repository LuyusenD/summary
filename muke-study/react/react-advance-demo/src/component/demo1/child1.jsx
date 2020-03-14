import React from 'react'

// React.Component 是不会对数据进行比较
// React.PureComponent 会对数据进行浅比较 
// 若是数据对比一致 则不会重新渲染组件 (复杂数据手动处理)
export default class Child extends React.PureComponent{

  render(){
    console.log('children1');
    return (
      <div>
        child : {this.props.num}
      </div>
    )
  }
}