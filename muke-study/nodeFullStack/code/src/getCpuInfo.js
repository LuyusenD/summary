//读取系统cpu信息

const os = require('os')

const cpus = os.cpus() //获取当前cpu熟练

console.log(cpus.length)

//获取内存信息

const total = os.totalmem() //获取bytes

console.log(total/1024/1024/1024) // bytes/kb/mb/gb    GB

const free = os.freemem() //剩余内存

console.log(free/1024/1024/1024) // bytes/kb/mb/gb    GB