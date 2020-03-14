import React from 'react' 
import {withRouter} from "react-router-dom"

class LoginNotRouter extends React.Component{
  handler = () => {
    console.log(this.props);
  }
  render(){
    return (
      <div>
        <button onClick={this.handler}>return</button>
      </div>
    )
  }
}

export default withRouter(LoginNotRouter)