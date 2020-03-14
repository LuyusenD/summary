import React from 'react'

export default class Child extends React.Component{

  //更新渲染, 父组件发生变化重新渲染render 导致子组件也发生重新渲染
  //该函数可拿到 下一次返回的props 跟自己本身的props对比 来做决定是否需要重新渲染
  //返回false 则不更新视图
  // nextProps nextState  参数
  shouldComponentUpdate(nextProps,nextState) {
    if (nextProps.num === this.props.num) {
      return false
    }
    return true
  }

  render(){
    console.log('children');
    return (
      <div>
        child : {this.props.num}
      </div>
    )
  }
}