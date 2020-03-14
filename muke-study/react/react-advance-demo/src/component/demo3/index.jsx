import React from 'react'
// import PropTypes from 'prop-types'

//通过 react.createContext 来创建需要传递的参数 
const ThemeContext = React.createContext('light')

const Children = (props) => {
  return (
    <div>
      <Item />
    </div>
  )
}
class Item extends React.Component{
  static contextType = ThemeContext;
  render () {
    console.log(this.context);
    return (
      <div>
        {/* color: {this.context.color} */}
      </div>
    )
  }
}

export default class Demo3 extends React.Component {

  render() {
    return (
      <ThemeContext.Provider value="sss">
        <Children />
      </ThemeContext.Provider>
    )
  }
}
