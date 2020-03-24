import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import * as api from '../../services/example'
import * as action from '../../actions'

const Login = (props) => {
  console.log(props);
  const [count] = useState(10)
  
  useEffect(async () => {
    console.log(api);
    let userInfo = await api.login()
    console.log(userInfo);
    let res = await api.list()
    console.log(res);
    
  }, [])

  const login = () => {
    // props.dispatch({
    //   type: "user/login",
    //   username: 'Freey'
    // })
    console.log(action);
    props.dispatch(action.login({username: 'Freey'}))
    console.log(props);
  }

  const loginAsync = () => {
    props.dispatch({
      type: "user/loginAsync"
      // params
    })
  }

  return (
    <div>
      Login: {count}
      <p>name: {props.user.username}</p>
      <button onClick={ login }>登录</button>
      <button onClick={ loginAsync }>登录async</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)