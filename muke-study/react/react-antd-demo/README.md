## antd ui 组件库使用

## 按需加载 antd
   1. npm install eject  拉去react配置文件
   2. 报错问题: 关于文件被修改无法拉去配置 删除.git 目录 或者 git分支提交
   3. 打开package.json => babel 添加配置
    {
      "plugins": [
        ["import", {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css" // `style: true` 会加载 less 文件
        }]
      ]
    }