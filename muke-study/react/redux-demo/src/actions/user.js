import { FETCH_USER, FETCH_USER_AWAIT, FETCH_USER_ERROR } from '../contants'

export function fetchUser (user) {
  console.log(user);
  return { 
    type: FETCH_USER,
    user
   }
}

export function fetchUserAwait (state) {
  return {
    type: FETCH_USER_AWAIT,
    state
  }
}

export function fetchUserError (error) {
  return {
    type: FETCH_USER_ERROR,
    error
  }
}

export function getUser () {
  return dispatch => {
    dispatch(fetchUserAwait('await'))
    fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
    .then(res => res.json())
    .then(res => {
      dispatch(fetchUser(res.chengpinDetails[0]))
    })
    .catch(e => {
      dispatch(fetchUserError(e))
    })
  }
}