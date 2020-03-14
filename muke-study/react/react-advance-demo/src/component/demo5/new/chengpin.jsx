import React from 'react'
import withFetch from '../withFetch'

const Chengp = withFetch('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')((data) => {
  console.log(data);
  return (
    <div>
       new chengp: {data.data.chengpinInfo[0].title}
    </div>
  )
})

export default Chengp