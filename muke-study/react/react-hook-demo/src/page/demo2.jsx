// import React from 'react'

// export default class Demo2 extends React.Component{
//   state = {
//     count: 0
//   }
//   //不使用hook  操作更改标题 
//   componentDidMount(){
//     document.title = `time is ${ this.state.count } ?`
//   }
//   componentDidUpdate(){
//     document.title = `time is ${ this.state.count } ?`
//   }

//   render(){
//     return(
//       <div>
//         time is { this.state.count } ?
//         <button onClick={ () => {this.setState({count: this.state.count + 1 })}}>add</button>
//       </div>
//     )
//   }
// }

//使用hook 

import React, { useState, useEffect } from 'react'

export default () => {

  const [count, setCount] = useState(0)

  /**
   * useEffect 会执行三个构造函数
   *   componentDidMount
   *   componentDidUpdate
   *   componentWillUnMount
   */

  // 执行体 不做任何操作 会执行 1,2生命周期函数
  // 可以 有返回体  return ()=>{}  返回体会在 3生命周期执行
  // 参数二 为中括号 表示只执行1生命周期
  useEffect(() => { 
    document.title = `time is ${ count } ?`
  },[])

  return (
    <div>
      time is {count}?
      <button onClick={() => { setCount(count + 1) }}>add</button>
    </div>
  )
}