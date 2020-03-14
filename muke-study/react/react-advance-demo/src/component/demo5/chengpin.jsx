import React from 'react'

export default class Banner extends React.Component {
  constructor() {
    super()
    this.state = {
      loding: true,
      chengpinInfo: null
    }
  }

  componentDidMount() {
    fetch('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          loding: false,
          chengpinInfo: data.chengpinInfo[0].title
        })
      })
  }
  render() {
    return (
      <div>
        chengpinInfo: {this.state.chengpinInfo}
      </div>
    )
  }
}