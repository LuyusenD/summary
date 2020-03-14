import * as actionKey from '../contants'

// export function add (num) {
//   return { 
//     type: actionKey.ADD,
//     num
//    }
// }

// 异步调用 需要结合redux-thunk中间件处理
export function add (num) {
  //返回一个回调函数, 利用回调函数, 通过 bindActionCreators 绑定在 actions 上,每次调用 则触发回调函数 setTimeout 调用方法
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type:actionKey.ADD,
        num
      })
    },1000)  
  }
  
}

export function del (num) {
  return { 
    type: actionKey.DEL,
    num
   }
}