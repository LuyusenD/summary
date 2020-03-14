import React from 'react' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/user'

const User = (props) => {
  console.log(props);
  return (
    <div>
      <p>User</p>
      <p>user.title: {props.user.user.title}</p>
      <p>await: {props.user.isFetching ? "loding..." : ''}</p>
      <p>error: {props.user.error}</p>
      <button onClick={() => props.actions.getUser()}>get</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)