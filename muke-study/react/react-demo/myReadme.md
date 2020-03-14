# 构建工具 webpack : https://yunp.top/init/p/v/1

## 创建react-demo
  npx create-react-app react-demo
  cd react-demo
  npm start

## react 基本语法
  # JSX语法: Javascript + XML语法
     解读JSX语法: 遇到<>按照XML语法解析 ,遇到{}按照JS语法解析

  # 元素渲染 ()

  # 组件
     组件后缀支持 js/jsx

  # porps 属性
      props 不能在子组件修改数据,只能在父组件修改

  # state
      this.setState({count})

  # React 生命周期
      函数列表: 
        componentWillMount: 在组件渲染前执行
        componentDidMount: 在组件渲染后
          改变state:
            shouldComponentUpdate: 返回true和false, true 代表允许改变, false 代表不允许改变
            componentWillUpdate：数据在改变之前执行
            componentDidUpdate: 数据修改完成
          改变props:
            componentWillReceiveProps:props发生改变执行
        componentWillUnmount: 组件摧毁前执行
        
      子父传参！

  # setState更新是同步还是异步
      使用async转同步

  # 条件渲染

  # 列表 & key

  # 表单
      受控表单 非受控表单

  # refs and the dom

  # 状态提升

  # 组合 继承

  # propsType 类型检查