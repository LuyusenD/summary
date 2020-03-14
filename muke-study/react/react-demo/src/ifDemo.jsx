import React from 'react'

export default class IfDemo extends React.Component{
  constructor () {
    super()
    this.state = {
      isLogin: false,
      users: []
    }
  }

  login = () => {
    this.setState({
      isLogin : true
    })
    console.log(this.state);
  }

  render(){
    let showView = this.state.isLogin ? 
                   <div>已登陆</div> :
                   <div>请登录</div>
    return (
      <div>
        条件渲染
        { showView }
        <button onClick={ this.login }>登录</button>

        <div>
          用户列表
          {/* {
            this.state.users.length > 0 ?
              <ul>
                {
                  this.state.users.map((v,i) => {
                    return <li key={i}>{v}</li>
                  })
                }
              </ul>
              :
              <div><br/><span>请等待加载</span></div>
          } */}

          {
            
            <ul>
              {
                this.state.users.length > 0 ?
                  this.state.users.map((v,i) => {
                    return <li key={i}>{v}</li>
                  })
                  :
                  <a href="javascript">请等数据加载</a>
              }
            </ul>
              
          }
        </div>
      </div>
    )
  }
}