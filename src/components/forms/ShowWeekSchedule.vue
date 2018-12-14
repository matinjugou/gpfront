<template>
    <div style="margin: 5px; height: 100%">
        <div style="float: left; padding-left: 10px;">
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
        <div style="margin: 20px; width: 100%">
            <calendar></calendar>
        </div>
    </div>
</template>

<script>
  import Calendar from "../public/Calendar";

  export default {
    components: {Calendar},
    name: "show-week-schedule",
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