import React from 'react'
// import Nav from './nav.jsx'
// import StateComponent from './stateComponent'
// import ComponentLife from './componentLife'
// import SetStateDemo from './setStateDemo'
// import IfDemo from './ifDemo'
// import KeyDemo from './keyDemo'
// import FormDemo from './formDemo'
// import RefForm from './refForm'
// import Parent from './components/moneyComp/parent'
// import Compont from './Compont'
import PropsType from './propsType'
//用类形式创建组件, hook形式

class App extends React.Component{
  constructor () {
    super()
    this.state = {
      title : '文本1'
    }
  }

  clickChange=(data)=>{
    
    this.setState({
      title: data
    })
  }
  render(){
    // const nav1 = ['学习','看书','看视频']
    // const nav2 = ['注册','登录','退出登录']
    return (
      <div>
        {/* 注释 */}
        {/* <h1>hello react component</h1>
        <h2>react demo</h2>
        <Nav nav = {nav1} title="导航栏1" />
        <Nav nav = {nav2} title="导航栏2" /> */}

        {/* <StateComponent /> */}

        {/* <ComponentLife  title={ this.state.title } clickChanges={this.clickChange}/>
        <button onClick={ ()=>{this.clickChange('我是福')} } >修改文本</button> */}

        {/* <SetStateDemo /> */}

        {/* <IfDemo /> */}

        {/* <KeyDemo /> */}

        {/* <FormDemo />
        <RefForm /> */}

        {/* <Parent /> */}

        {/* <Compont>
          <Parent />
        </Compont> */}

        <PropsType  title="标题"/>
      </div>
    )
  }
}

export default App