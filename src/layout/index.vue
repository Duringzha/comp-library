<template>
  <el-container class="page-component__scroll">
    <el-header>
      <PlHeader></PlHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :collapse="false"
          :default-openeds="['1', '2']"
          class="el-menu-vertical"
        >
          <span v-if="!isVue2">
            <el-menu-item index="1" @click="goHome">
              <el-icon><HomeFilled /></el-icon>
              <span>Home</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>组件列表</span>
              </template>
              <el-menu-item-group
                v-for="(item, index) in menus" 
                :key="index"
              >
                <template #title>{{ item.title }}</template>
                <el-menu-item 
                  v-for="page of item.router"
                  :key="page.path"
                  @click="go(page)"
                >{{ page.meta.title }}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </span>
          <span v-else>
            <el-menu-item index="1" @click="goHome">
              <i class="el-icon-s-home"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>组件列表</span>
              </template>
              <el-menu-item-group
                v-for="(item, index) in menus" 
                :key="index"
              >
                <template #title>{{ item.title }}</template>
                <el-menu-item 
                  v-for="page of item.router"
                  :key="page.path"
                  @click="go(page)"
                >{{ page.meta.title }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </span>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </el-main>
    </el-container>
    <el-backtop target=".page-component__scroll"></el-backtop>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref, isVue2 } from 'vue-demi';
import routers from '../router/modules/index';
export default defineComponent({
  // data() {
  //   return {
  //     isVue2,
  //     menus: routers.menus
  //   };
  // },
  setup() {
    const _this:any = this;
    type metaVo = {
      title: String
    };
    type routerVo = {
      path: String,
      name: String,
      meta: metaVo,
    };
    type menusVo = {
      title: String,
      router: Array<routerVo>
    };
    const menus = ref<menusVo[]>(routers.menus);
    function go(page:routerVo) {
      _this.$router.push({name: page.name});
    }
    function goHome() {
      _this.$router.push({name: 'Home'});
    }
    return {
      isVue2,
      menus,
      go,
      goHome
    }
  },
})
</script>
<style lang="scss" scoped>
.page-component__scroll {
  height: 100%;
  overflow: hidden;
  .el-menu-vertical {
    height: 100%;
  }
}
::v-deep {
  .el-container {
    height: 100%;
    overflow: auto;
    margin-top: 1px;
  }
}
</style>