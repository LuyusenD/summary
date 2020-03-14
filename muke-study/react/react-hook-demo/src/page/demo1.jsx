//不使用hook

// import React from 'react'

// export default class Demo1 extends React.Component{
//   render(){
//     return(
//       <div>
//         use Hook
//       </div>
//     )
//   }
// }


// hook写法 简易

import React, { useState } from 'react'

export default () => {

  //使用useState 创建state 单属性,  0的参数代表默认值
  const [count, setCount] = useState(0)

  return (
    <div>
      count: { count }
      <button onClick={ () => { setCount(count + 1) }}>add</button>
    </div>
  )
}