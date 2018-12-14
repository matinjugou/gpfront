<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <el-menu default-active="/organizer"
                 class="nav-menu"
                 mode="horizontal"
                 :router="true">
          <!--el-menu-item index="/table">Table</el-menu-item-->
          <el-menu-item index="/organizer">Organizer</el-menu-item>
          <el-menu-item index="/participant">Participant</el-menu-item>
          <!--el-menu-item index="/sysadmin">SysAdmin</el-menu-item-->
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-header {
  margin: 0;
  background-color: white;

}

.el-main {
  height: 100%;
  padding: 0 !important;
  padding-top: 1px !important;
}
</style>
