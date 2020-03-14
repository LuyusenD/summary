import React, { useState, useCallback } from 'react'

const Demo11 = () => {

  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(0)
  return (
    <div>
      <p>useCallback</p>
      <div>
        count: {count}
      </div>
      <button onClick={() => setCount(count + 1)} >click me</button>
      <div>
        count1: {count1}
      </div>
      {/* useCallback  第一个参数传进去执行方法, 第二个参数为数组
          若 第二个参数发生变化 传进去的方法才能执行一次 为此减少render 渲染，  性能优化      
      */}
      <button onClick={useCallback(() => setCount1(count1 + 1), [count])} >click me</button>
    </div>
  )
}

export default Demo11