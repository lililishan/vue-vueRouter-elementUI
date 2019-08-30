
<template>
  <div id='app'>
    <el-container>
      <el-header class='header'>
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main>
           <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu"
import Header from "@/components/Header"
export default {
  name: 'App',
  components:  {
    'NavMenu': NavMenu,
    "vheader": Header,
  }
}
// <template>
//   <div id="app">
//     <img src="./assets/logo.png">
//     <div>
//         <router-link to='/'>Home</router-link>
//         <router-link to='/about'>About</router-link>
//     </div>
//     <router-view/>
//   </div>
// </template>
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  .header {
    line-height: 60px;
    color: #fff;
    background-color: #409eff;
  }
}
</style>
