<template>
  <div class="header-container">
    <div class="l-content">
      <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="pushShow(item)">{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user-info" src="https://himg.bdimg.com/sys/portraitn/item/public.1.bc3e471d.AY7bQ3ZGhP3288jb-ypJ9g" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "CommonHeader",
  data() {
    return {

    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    // eslint-disable-next-line no-unused-vars
    pushShow(item) {
      this.$router.push(item.path).catch(err => err)
      return item.path
    }
  },
  computed: {
    /*mapState返回一个对象,使用扩展运算符...解构,因此computed中就有了tags的内容*/
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  mounted() {
    console.log(this.tags)
  }
}
</script>

<style lang="less" scoped>
  .header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      color: #fff;
      font-size: 14px;
      margin-left: 10px;
    }
    .r-content {
      .user-info {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
    .l-content {
      display: flex;
      align-items: center;
      /*
        /deep/
          vue中对样式处理的机制: 对于vue中的标签,每一个标签中都有一个 data-v-随机数 的标识,该标识表示当前组件的唯一身份,
        但子元素的span标签没有这个标识,导致对子元素span的样式设置不生效,此时使用/deep/标签进行样式穿刺,使子元素的样式生效
      */
      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          /*此处 & 表示并且,即有...crumb__inner并且有os-link的class的元素*/
          &.is-link {
            color: #666;
            font-weight: normal;
          }
        }
        /*使用伪类找到最后一次激活的子元素高亮显示*/
        &:last-child {
          .el-breadcrumb__inner {
            color: #fff
          }
        }
      }
    }
  }
</style>
