import React from 'react'
import Child from './child'
import Child1 from './child1'

const myApi = {
  count: 0,
  start (callback) {
    this.interval = setInterval(() => {
      this.count += 1
      callback(this.count)
    },800)
  },
  end () {
    clearInterval(this.interval)
  },
  reset(){
    this.count = 0
  }
}

export default class Parent extends React.Component{

  state = {
    count: 0
  }

  componentDidMount () {
    myApi.start((count) => {
      this.setState({
        count
      })
    })
  }

  componentWillUnmount() {
    myApi.end()
  }

  render(){
    console.log('parent');
    return (
      <div>
        计数: {this.state.count}
        <Child num={ this.state.count }/>
        <Child1 num={ this.state.count }/>
      </div>
    )
  }
}