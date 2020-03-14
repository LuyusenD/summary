import React from 'react'

export default class FormDemo extends React.Component{

  constructor () {
    super()

    this.helloDiv = React.createRef()

    this.state = {
      value: '',
    }
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handlerSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value);  
  }

  componentDidMount() {
    console.log(this.helloDiv.current);
    console.log(this.refs.hello);
  }

  render () {
    return (
      <div>
        受控组件

        <form onSubmit={ this.handlerSubmit }>
          <input type="text" value={ this.state.value }  onChange={ this.onChange }/>
          <button>提交</button>
        </form>

        <div ref={ this.helloDiv }>
          hello
        </div>
        <div ref="hello">
          hello 2
        </div>
      </div>
    )
  }
}