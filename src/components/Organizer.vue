<template>
    <el-container style="height: 100%">
        <el-container style="height: 100%">
            <el-aside width="275px">
                <el-menu class="el-menu-vertical"
                         style="padding-left: 20px; height: 100%"
                         :router="true">
                    <el-menu-item index="/organizer/createschedule">
                        Create Schedule
                    </el-menu-item>
                    <el-menu-item index="/organizer/deleteschedule">
                        Delete Schedule
                    </el-menu-item>
                    <el-menu-item index="/organizer/opentimeslot">
                        Open Time Slot
                    </el-menu-item>
                    <el-menu-item index="/organizer/closetimeslot">
                        Close Time Slot
                    </el-menu-item>
                    <el-menu-item index="/organizer/cancelmeeting">
                        Cancel Meeting
                    </el-menu-item>
                    <el-menu-item index="/organizer/extendstartdate">
                        Extend Start Date
                    </el-menu-item>
                    <el-menu-item index="/organizer/extendenddate">
                        Extend End Date
                    </el-menu-item>
                    <el-menu-item index="/organizer/showweekschedule">
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
    name: "organizer"
  }
</script>

<style scoped>

</style>