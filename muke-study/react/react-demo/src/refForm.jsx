import React from 'react'

export default class RefForm extends React.Component{
  
  constructor () {
    super()

    this.userName = React.createRef()
  }

  getValue = () => {
    console.log(this.userName.current.value);
  }

  render () {
    return (
      <div>
        <input type="text" ref={ this.userName }/>
        <button onClick={ this.getValue }>get</button>
      </div>
    )
  }
}