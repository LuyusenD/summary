import React from 'react'
import querystring from 'querystring'
import LoginNotRouter from './loginNotRouter'

export default class Login extends React.Component{

  constructor (props) {
    super(props)
  }

  goback = () => {
    console.log(this.props);
    // this.props.history.go(-1)
    // this.props.history.push('/')
    this.props.history.replace('/') 
    // push and replace 区别:  push 是叠加形式, 原页面还会存在缓存上,   replace是替换式
  }
  render(){
    // let params = new URLSearchParams(this.props.location.search)
    console.log(this.props);
    let pathSearch = this.props.location.search.slice(1)
    let params = querystring.parse(pathSearch)
    // console.log(params);
    return (
      <div>
        Login:
        <p>
          params: 
          {params['id']}
          {params['name']}
          {/* {params.get('name')} */}
          {/* {params.get('id')} */}

          <button onClick={this.goback}>回到home页面</button>
        </p>
        <LoginNotRouter />
      </div>
    )
  }
}