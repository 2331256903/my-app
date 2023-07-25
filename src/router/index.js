import vue from 'vue'
import VueRouter from "vue-router"
import Home from'../views/Home.vue'
import User from'../views/User.vue'
import Main from'../views/Main.vue'
import Mail from'../views/Mail.vue'
import PageOne from'../views/PageOne.vue'
import PageTwo from'../views/PageTwo.vue'
vue.use(VueRouter)

// 1.创建路由组件
// 2.将路由与组件进行映射
// 3.创建router实例

// 解决ElementUI导航栏中重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 主路由
  {
    path: '/',
    component: Main,
    redirect: '/home', // 重定向
    children: [
      // 子路由(嵌套路由) 不能带 /
      { path: 'home', name: 'home', component: Home }, // 首页
      { path: 'user', name: 'user', component: User }, // 用户管理
      { path: 'mail', name: 'mail', component: Mail }, // 商品管理
      { path: 'page1', name: 'page1', component: PageOne }, // 页面1
      { path: 'page2', name: 'page2', component: PageTwo }, // 页面2
    ]
  },
]

const router = new VueRouter({
  routes  //缩写,相当于 routes: routes
})

export default router

