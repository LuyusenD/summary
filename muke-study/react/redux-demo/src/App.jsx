import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/couter'
// import { add, del } from './actions/couter'
// 帮助处理action 所传递方法 结合dispatch   方便调用action
import { bindActionCreators } from 'redux'

import User from './pages/user'

function App(props) {
  // console.log(props);
  const {actions,conter} = props
  return (
    <div className="App">
      Learn React: {conter}
      {/* 不使用 bindActionCreators */}
      {/* <button onClick={() => props.add()}>add</button>
      <button onClick={() => props.del()}>del</button> */}

      <button onClick={() => {actions.add(10)}}>add</button>
      <button onClick={() => {actions.del(3)}}>del</button>
      <User />
    </div>
  );
}
//react-redux  redux参数
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    conter: state.conter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

//在actions集成操作方法  封装方法 挂载到App模块props上   不使用bindActionCreators
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: () => {dispatch(add())},
//     del: () => {dispatch(del())},
//   }
// }

//高阶操作  挂载方法 参数
export default connect(mapStateToProps,mapDispatchToProps)(App);
