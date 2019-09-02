<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened
                router
                >
                <el-submenu  v-for="(item) in menu" :index = item.id  :key="item.id">
                    <template slot="title">
                        <i :class="item.iconClass"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group v-for="row in item.sub" :key="row.componentName">
                        <el-menu-item :index="row.componentName" >{{row.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
import {menu} from "@/config/menu-config"
  export default {
    data: () => {
        return {
            menu: menu
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less">
.el-menu {
  border-right: solid 1px rgb(84, 92, 100);
  .el-submenu__title {
    text-align: left;
    }
}
    
</style>