import React from 'react'
import PropTypes from 'prop-types'

const Children = (props) => {
  return (
    <div>
      Item: 
      <Item />
    </div>
  )
}
const Item = (props, context) => {
  console.log(context);
  return (
    <div>
      color: {context.color}
    </div>
  )
}
export default class Demo3 extends React.Component {
  getChildContext () {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        context
        <Children color="red"/> 
      </div>
    )
  }
}

Item.contextTypes = {
  color: PropTypes.string
}
Demo3.childContextTypes = {
  color: PropTypes.string
}