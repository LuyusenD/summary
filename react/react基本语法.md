-----------------------------------------------------------------
			    react.js
-----------------------------------------------------------------
  1.概述:
  2.React基本语法:
      组件:组件是可别反复使用,带有特定功能的试图
      核心思想: everything is component
      核心概念:
       jsx
       conpoment
       props
       state
       ref
  3.Jsx 核心概念:
      jsx 是允许在js中编写标签

      缺点:虽然支持写标签,但是都会经过一层转换
      优点:方便封装组件 / 实现组件间通信

      react不是强制要求使用jsx语法, 但是推荐使用jsx

      1.jsx中,渲染内容,与vue中的template类似,必须放在跟标签中
      2.每个元素都必须带有跟标签例如: <input type="" />
      3.执行语法或者调数据与vue相似使用的是{}单花括号视为代码块
  4.component 核心概念:
      组件的创建使用:
	  创建: var Cmt = React.createClass({
		  rander(){
		    return <div>
		  }
		})
	  调用: ReactDOM.rander(<Cmt></Cmt>,elem)
	  类似相同结构 可以封装
          1.组件类名称必须按照大小驼峰命名法
	  2.渲染多个元素,必须要带跟标签
  5.props 核心概念
      子父组件通信:
          step1:
	      在父组件当中 定义有参数的方法 test(i){clg(i)}//1
	  step2:
	      父组件调用子组件,通过自定义属性 将方法传递子组件
	      <any myFun={this.test}>
	  step3:
	      子组件调用父组件传来的方法并进行传值
	      this.props.myFun(1)
  6.refs 核心概念
      父组件主动从子组件取值
          step1:
	      在父组件中给 <MyChild ref="mySon"> 子组件标签定义
	      ref 属性 并且赋值命名
	  step2:
	      在父组件的方法中输出 this.refs.mySon.子组件数据
	      就可以获取了
  7.state 核心概念
      state 负责数据在组件内部的定义 操作 读写
      
      1.数据绑定
        <any>this.state.count</any>
      2.完成数据的基本管理,包括读 写 初始化
      初始化:
          getInitialState(){return { count : 0 } } 状态管理
      读:
          this.state.count
      写:
          this.setState({count : 改变值})
	  this.setState({count : 改变值},()=>{}) 回调函数,当修改
	  成功 就会触发回调函数
  8.生命周期钩子函数
  9.受控表单组件
  10.进阶知识
      知识点1: 循环
          直接遍历集合,在迭代函数当中返回,要重复创建那个标签
      知识点2: 条件
          方案1: 判断条件简单 推荐使用逻辑短路运算
	  方案2: 判断条件相对复杂,可以将判断封装成函数调用
      知识点3: 