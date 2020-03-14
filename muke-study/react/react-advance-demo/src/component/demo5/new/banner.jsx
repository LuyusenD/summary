import React from 'react'
import withFetch from '../withFetch'

const Banner = withFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')((data) => {
  console.log(data);
  return (
    <div>
       new banner: {data.data.banner[0].title}
    </div>
  )
})

export default Banner