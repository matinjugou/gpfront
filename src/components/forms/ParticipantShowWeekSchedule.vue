<template>
    <div style="height: 100%; float: left; padding-left: 10px; padding-top: 10px">
        <el-form label-position="left">
            <el-form-item label="Schedule ID">
                <el-input v-model="form.schedule_id"></el-input>
            </el-form-item>
            <el-form-item label="Start Date">
                <el-date-picker v-model="form.start_date" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item label="End Date">
                <el-date-picker v-model="form.end_date" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">
                    Submit
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "participant-show-week-schedule",
    data () {
      return {
        form: {
          schedule_id: '',
          start_date: '',
          end_date: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>