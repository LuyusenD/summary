import { clone } from '../utils/global'
import * as api from '../services/example'
export default {
  namespace: 'user',

  state: {
    username: null
  },

  reducers: {
    login(state, actions) {
      console.log(1);
      let newValue = clone(state)
      console.log(actions);
      newValue.username = actions.payload.username
      return newValue
    }
  },

  effects: {
    *loginAsync(state , { call, put }) {
      const result = yield call(api.details, {type: '测试'})
      console.log(result.data.chengpinDetails[0].title);
      // .then(res => res.json())
      // .then(data => data.chengpinDetails[0].title)
      yield put({
        type: 'login',
        payload: {
          username: result.data.chengpinDetails[0].title
        }
      })
    }
  }
}