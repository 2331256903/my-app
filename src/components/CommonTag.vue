<template>
  <div class="tabs">
    <!--
      :effect 判断当前路由的name是否等于要渲染的tag的name,相等则处于激活状态
      :closable home页面tag不可关闭
    -->
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :effect=" $route.name === item.name ? 'dark' : 'plain'"
      :closable = "item.name !== 'home'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
      >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CommonTag",
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations(['closeTag']),
    // 点击tag跳转的功能
    changeMenu(item) {
      /*通过名称进行push跳转*/
      this.$router.push({name: item.name})
    },
    // 点击tag删除的功能
    handleClose(item, index) {
      // 调用store中的mutation
      this.closeTag(item)
      // 获取到当前长度
      const length = this.tags.length
      // 删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        // 当前选中的tag不是路由展示的tag,直接删除
        return
      }
      // 表示删除的为最后一项 跳转到前一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index -1].name
        })
      } else {
        // 表示删除的为中间一项,则跳转到后一项
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
