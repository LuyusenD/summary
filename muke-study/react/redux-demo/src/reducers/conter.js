import * as actionKey from '../contants'

const conter = (state = 0, action) => {
  switch (action.type) {
    case actionKey.ADD:
      // throw new Error('错误')
      return state + action.num;
    case actionKey.DEL:
      return state - action.num;
    default: 
      return state;
  }
}

export default conter