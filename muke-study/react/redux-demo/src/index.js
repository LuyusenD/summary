import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
// createStore 创建仓库函数    applyMiddleware 处理中间件
import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers/conter'
import rootReducer from './reducers'
// 第三方中间件 redux-logger 处理action操作日志打印
import logger from 'redux-logger'
// 第三方中间件 redux-thunk 处理需要异步调用的action 中间件
import thunk from 'redux-thunk'
// redux-devtools-extension 用于开发环境 redux工具 监听数据
import { composeWithDevTools } from 'redux-devtools-extension'
//手写中间件
// const logger = store => next => action => {
//   console.log(action);
//   let result  = next(action)
//   console.log(store.getState());
//   return result
// }
// const error = store => next => action => {
//   try{
//     next(action)
//   }catch(e){
//     console.log('error ->',e);
//   }
// }



//创建 store仓库   params:['集成reducers','？','处理中间件函数(中间件,中间件)']
// const store = createStore(rootReducer,{},applyMiddleware(logger,error))
//composeWithDevTools redux工具 监听数据变化 在开发环境 提高开发效率  绑定到中间件上，
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(logger,thunk)))
/**
 * react-redux
 */

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));





/**
 * redux 
 * 
 */
// store.subscribe(() => {
//   console.log(store.getState());
// })
// const render = () => {
//   ReactDOM.render(<App 
//     add = { () => {store.dispatch({ type : 'add' })} }
//     del = { () => {store.dispatch({ type : 'del' })} }
//     value = {store.getState()}
//   />, document.getElementById('root'));
// }

// render()

// store.subscribe(() => {
//   // console.log(store.getState());
//   render()
// })