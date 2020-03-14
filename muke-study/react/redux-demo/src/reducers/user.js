import {FETCH_USER , FETCH_USER_AWAIT, FETCH_USER_ERROR } from '../contants'

const initialState = {
  user: {},
  isFetching: false,
  error:null
}
const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      //三大原则, state只读, 需要改变state 需要出发action改变 
      return {
          user: action.user,
          isFetching: false,
          error:null
        }
    case FETCH_USER_AWAIT:
      return {
        user: {},
        isFetching: true,
        error:null
      }
    case FETCH_USER_ERROR:
      return {
        user: {},
        isFetching: false,
        error: action.error
      }
    default: 
      return state;
  }
}

export default user