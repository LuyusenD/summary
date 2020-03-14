import React from 'react'
import Banner from './banner'
import Newbanner from './new/banner'
import Newchengp from './new/chengpin'
import Chengpin from './chengpin'

const Demo5 = () => {
  return(
    <div>
      高阶组件示例
      <Banner />
      <Chengpin />

      <Newbanner />
      <Newchengp />
    </div>
  )
}

export default Demo5