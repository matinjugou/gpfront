<template>
    <el-container style="height: 100%">
        <el-container style="height: 100%">
            <el-aside width="275px">
                <el-menu class="el-menu-vertical"
                         style="padding-left: 20px; height: 100%"
                         :router="true">
                    <el-menu-item index="/participant/createmeeting">
                        Create Meeting
                    </el-menu-item>
                    <el-menu-item index="/participant/cancelmeeting">
                        Cancel Meeting
                    </el-menu-item>
                    <el-menu-item index="/participant/showweekschedule">
                        Show Week Schedule
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";

  export default {
    components: {ElContainer},
    name: "participant"
  }
</script>

<style scoped>

</style>