import React, { useState, useEffect } from 'react'

function GetFetch(url) {
  const [data, setData] = useState(null)
  const [lodding, setLodding] = useState(true)

  useEffect(() => {
    (async () => {
      let res = await fetch(url)
      let data = await res.json()
      setData(data)
      setLodding(false)
      console.log(data);
    })();
  }, [url])

  return [data, lodding]
}
const Demo6 = () => {
  const [data, lodding] = GetFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
  return (
    <div>
      {
        lodding ? 'lodding....' : <div>{data.chengpinDetails[0].title}</div>
      }
    </div>
  )
}

export default Demo6