import React from 'react'
import {Redirect, Prompt} from 'react-router-dom'
export default class Shop extends React.Component{
  state = {
    isLogin: true,
    value: ''
  }

  back = () => {
    console.log('调用方法');
  }
  render() {
    let {isLogin} = this.state
    return (
      <div>
        {
          isLogin ? <div> shop </div> : <Redirect to="/" /> 
        }
        <Prompt
          when={!!this.state.value}
          message="Are you sure you want to leave?"
        />
        <input type="text" value={ this.state.value } onChange={(e) => {this.setState({value: e.target.value})}}/>
      </div>
    )
  }
}