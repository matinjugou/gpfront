<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="time"
                    label="time">
            </el-table-column>
            <el-table-column
                    v-for="p in period"
                    :prop="p"
                    :label="p"
                    :key="p">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "calendar",
    data () {
      return {
        period: ['11/26', '11/27', '11/28', '11/29', '11/30', '12/3', '12/4', '12/5'],
        tableData: []
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>