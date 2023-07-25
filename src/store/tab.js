export default {
  state: {
    isCollapse: false,  // 用于控制菜单展开和收起
    tabsList: [
      // 默认首页
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/home"
      }
    ] //面包屑数据
  },
  mutations: {
    // 修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      console.log(val)
      // 判断添加的数据是否为首页
      if (val.name !== 'home') {
        // 数组findIndex方法,传入一个函数,判断当前name与选择的菜单的name是否一致,一致则返回,返回当前数据存在的索引,如果不存在则返回-1
        const index = state.tabsList.findIndex(item => item.name === val.name)
        // 如果不存在
        if(index === -1) {
          state.tabsList.push(val)
        }
      }
    },
    // 删除指定的tag数据
    closeTag(state, item){
      /*findIndex返回数组中通过测试的第一个元素的索引(作为函数提供)*/
      const index = state.tabsList.findIndex(val => val.name === item.name)
      /*splice方法,第一个参数是开始删除的位置,第二个是删除的数量*/
      state.tabsList.splice(index, 1)
    }
  }
}
