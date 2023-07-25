import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'

// 定义Mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData())

// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
/*定义mock路径两种的方式,一种是写死一个路径(绝对路径,直接按照当前路径匹配)
* 现在携带了url参数,匹配不到了,因此使用正则写法
* */
Mock.mock(/api\/user\/getUser/, user.getUserList)
