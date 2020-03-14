import React, { useReducer } from 'react'

function reducer (state,action) {
  switch(action.type){
    case 'add':
      return {count: state.count + 1}
    case 'del':
      return {count: state.count - 1}
    default: 
      throw new Error('error')
  }
}

const initialState = {
  count: 0
}

const Demo12 = () => {
  // reducer 传进去 action 用法,    initialState 声明状态
  // 通过dispatch 分发属性 调用
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <p>useReducer -----</p>
      <div>
        count: {state.count}
      </div>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
      <button onClick={() => dispatch({type: 'del'})}>-</button>
    </div>
  )
}

export default Demo12