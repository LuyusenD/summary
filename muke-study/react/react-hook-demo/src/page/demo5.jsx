// import React from 'react'

// export default class Demo5 extends React.Component {
//   state = {
//     count: 0,
//     name: 'tom'
//   }

//   clickMe = (obj) => {
//     this.setState(obj)
//   }

//   componentDidMount () {
//     document.title = `times ${this.state.count}`
//   }
//   componentDidUpdate(prevProps, prevState){
//     if (prevState.count === this.state.count){
//       return false
//     }
//     console.log('执行');
//     document.title = `times ${this.state.count}`
//   }
//   render() {
//     const { count, name } = this.state;
//     return (
//       <div>
//         Demo5
//         <p>
//           count: {count} <br />
//           name: {name} <br/>
//           <button onClick={() => { this.clickMe({ count: count + 1 }) }}>click me</button>
//           <button onClick={() => { this.clickMe({ name: 'ime'}) }}>click me</button>
//         </p>
//       </div>
//     )
//   }
// }

import React, { useState, useEffect } from 'react'

const Demo5 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('tom')

  /**
   * useEffect
   *   []: 代表只执行生命周期函数: componentDidMount 
   *   不传第二个参数 代表执行生命周期: componentDidMount componentDidUpdate
   *   []: 中间的参数 代表监听的属性 如果发生变化 则触发 2生命周期 并只会对相对应的部分进行重新渲染
   * 
   *    return 参数
   */
  useEffect(() => {
    console.log('执行');
    document.title = `times ${count}`
  },[count])

  return (
    <div>
      <p>Demo5</p>
      <div>
        <div>count: {count}</div>
        <div>name: {name}</div>
        <button onClick={() => setCount(count + 1)} >click me</button>
        <button onClick={() => setName('ime')} >click me</button>
      </div>
    </div>
  )
}

export default Demo5