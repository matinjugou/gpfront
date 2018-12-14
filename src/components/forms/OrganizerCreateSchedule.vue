<template>
    <div style="height: 100%; float: left; padding-left: 10px; padding-top: 10px">
        <el-form label-position="left">
            <el-form-item label="Schedule Name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Start Date">
                <el-date-picker v-model="form.start_date" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item label="End Date">
                <el-date-picker v-model="form.end_date" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Start Hour">
                <el-input v-model="form.start_hour"></el-input>
            </el-form-item>
            <el-form-item label="Start Hour">
                <el-input v-model="form.end_hour"></el-input>
            </el-form-item>
            <el-form-item label="Slot Duration">
                <el-select v-model="form.slot_duration" placeholder="Please Choose Slot Duration">
                    <el-option label="15min" value="15"></el-option>
                    <el-option label="20min" value="20"></el-option>
                    <el-option label="30min" value="30"></el-option>
                </el-select>
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
    name: "organizer-create-schedule",
    data () {
      return {
        form: {
          name: '',
          start_date: '',
          end_date: '',
          start_hour: '',
          end_hour: '',
          slot_duration: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>