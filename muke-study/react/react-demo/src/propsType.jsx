import React from 'react'
import PropTypes from 'prop-types'

export default class Demo extends React.Component{
  render () {
    return (
      <div>
        demo: {this.props.title}
      </div>
    )
  }
}

Demo.propTypes = {
  title: PropTypes.string
}

Demo.defaultProps = {
  title: '默认值'
}