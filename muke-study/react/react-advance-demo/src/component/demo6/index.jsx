import React from 'react'
import Errors from './error'
import ErrorBoundary from './ErrorBoundary'

export default class Demo6 extends React.Component{
  render () {
    return (
      <div>123
        组件错误处理:
        1
        1
        <ErrorBoundary render={() => {return (<div>组件错误</div>)}}>
          <Errors />
        </ErrorBoundary>
        1
        1
        1

      </div>
    )
  }
}