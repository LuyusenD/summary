import React from 'react'

export default class Ucenter extends React.Component{
  constructor (props) {
    super(props)
  }
  render(){
    console.log(this.props);
    let params = this.props.match.params
    return (
      <div>S
        Ucenter: {params.id} - {params.name}
      </div>
    )
  }
}