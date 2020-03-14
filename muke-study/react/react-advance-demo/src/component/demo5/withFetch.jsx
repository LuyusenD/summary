import React, { Component } from 'react'

const WithFetch = url => View => {
  return class extends Component {
    constructor () {
      super()
      this.state = {
        lodding: true,
        data: null
      }
    }
    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            lodding: false,
            data
          })
        })
    }
    render() {
      console.log(this.state);
      if (this.state.lodding)
        return <div>lodding....</div>
      
      return (
        <View data={this.state.data}/>
      )
    }
  }
}

export default WithFetch