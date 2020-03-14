import React from 'react';
import qs from 'qs'
import ProxyDemo from './proxyDemo'

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      banner: []
    }
  }
  componentDidMount () {
    /**
     * get
     */
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    .then(res => res.json())
    .then(res => {
      this.setState({
        banner: res.banner
      })
      console.log(res);
    })

    /**
     * post
     */
    fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
      method: "POST",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json,text/plain,*/*"
      },
      body: qs.stringify({
        user_id:"iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw"
      })
    }).then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }
  render() {
    let { banner } = this.state
    return (
      <div className="App">
        banner
        <ul>
          {
            banner.length > 0 ?
            banner.map((el,index) => {
              return (
                <li key={index}>
                  <p>
                    <img src={el.img}/>{el.title} 
                  </p>
                  <p>
                    {el.content}
                  </p>
                </li>
              )
            })
            : 
            <li>加载数据中...</li>
          }
        </ul>
        <ProxyDemo />
      </div>
    );
  }
}

