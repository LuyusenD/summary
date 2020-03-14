import React from 'react'

export default class Banner extends React.Component {
  constructor() {
    super()
    this.state = {
      loding: true,
      banner: null
    }
  }

  componentDidMount() {
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          loding: false,
          banner: data.banner[0].title
        })
      })
  }
  render() {
    return (
      <div>
        Banner: {this.state.banner}
      </div>
    )
  }
}