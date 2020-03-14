import React, { Fragment } from 'react'
// 两种方法均可实现空包裹 
class Item extends React.Component {
  render() {
    return (
      <Fragment>
        <li>111</li>
        <li>111</li>
      </Fragment>
      // <>
      //   <li>111</li>
      //   <li>111</li>
      // </>
    )
  }
}

//fragment 跟 vue/template 一样 可以做空包裹
export default class Child extends React.Component {
  render() {
    return (
      <ul>
        <Item />
      </ul>
    )
  }
}