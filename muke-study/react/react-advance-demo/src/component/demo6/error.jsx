import React from 'react'

export default class Errors extends React.Component{
  render(){
    return(
      <div>
        {
          null.map(v => {
            return <li>v</li>
          })
        }
      </div>
    )
  }
}