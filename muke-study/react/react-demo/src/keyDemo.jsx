import React from 'react'

export default class KeyDemo extends React.Component{
  constructor () {
    super()
    this.state = {
      user: [
        {
          name: 'tom',
          age: '18',
          hobby: ['Basketball','Badminton','music']
        },
        {
          name: 'freey',
          age: '20',
          hobby: ['Badminton','music']
        }
      ]
    }
  }

  addUser = () => {
    this.setState({
      user: [{
        name: 'tom_Copy',
        age: '12',
        hobby: []
      }].concat(this.state.user)
    })
    console.log(1);
  }

  render () {
    return (
      <div>
        key使用
        <ul>
          {
            this.state.user.map((el,index) => {
              return (
                <li key={index}>
                  姓名: <span>{el.name}</span> <br/>
                  年龄: <span>{el.age}</span>  <br/>
                  <div>
                    兴趣爱好: 
                      <ul>
                        {
                          el.hobby.length > 0 ?
                            el.hobby.map((value,index) => {
                              return <li key={index}>{value}</li>
                            })
                            :
                            <li>暂无兴趣爱好</li>
                        }
                      </ul> 
                  </div>
                </li>
              )
            })
          }
        </ul>
        <button onClick={ this.addUser }>添加</button>
      </div>
    )
  }
}