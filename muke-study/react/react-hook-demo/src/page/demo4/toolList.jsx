import React, { useState, Fragment } from 'react'
import ToolFrom from './toolForm'

export default () => {

  const [list, setList] = useState([])

  const setValue = (value) => {
    setList([value, ...list])
    console.log(list);
  }
  return (
    <div>
      <ToolFrom onSubmit={setValue} />
      <div>
        {
          list.map((el, index) => {
            return <div key={index}>{el}</div>
          })
        }
        <button onClick={() => setList([])} >clear</button>
      </div>
    </div>
  )
}